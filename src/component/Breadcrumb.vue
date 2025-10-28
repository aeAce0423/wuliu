<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import projectList from "../data/projects.json";

const route = useRoute();
const router = useRouter();

const breadcrumbList = ref([]);

function generateBreadcrumb() {
  const list = route.matched.map((r) => {
    // 預設名稱
    let name = r.meta?.breadcrumbName || r.name || "";

    // 處理動態參數名稱
    if (r.path.includes(":")) {
      const paramName = r.path.match(/:([^/]+)/)[1];
      const paramValue = route.params[paramName];
      if (paramValue) {
        const project = projectList.find((p) => p.id === paramValue);
        name = project ? project.name : `${paramValue}`;
      }
    }

    // 取出完整路徑（將 :param 替換成實際值）
    let fullPath = r.path;
    Object.entries(route.params).forEach(([key, val]) => {
      fullPath = fullPath.replace(`:${key}`, val);
    });

    return {
      name,
      link: fullPath !== route.path ? fullPath : null,
    };
  });

  // 在專案細節頁面插入「案例分享」這層
  if (route.name === "ProjectDetail") {
    const hasProjects = list.some((i) => i.name === "案例分享");
    if (!hasProjects) {
      list.splice(list.length - 1, 0, {
        name: "案例分享",
        link: "/projects",
      });
    }
  }

  // 永遠把「首頁」放最前面
  const hasHome = list.some((i) => i.name === "首頁");
  if (!hasHome) {
    list.unshift({ name: "首頁", link: "/home" });
  }

  breadcrumbList.value = list;
}

function routeTo(idx) {
  const target = breadcrumbList.value[idx];
  if (target.link) {
    router.push(target.link);
  }
}

watch(() => route.fullPath, generateBreadcrumb, { immediate: true });
</script>

<template>
  <nav class="breadcrumb">
    <template v-for="(item, idx) in breadcrumbList" :key="idx">
      <span :class="{ linked: !!item.link }" @click="routeTo(idx)">
        {{ item.name }}
      </span>

      <!-- 中間分隔箭頭 SVG -->
      <svg
        v-if="idx < breadcrumbList.length - 1"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="13"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M6.146 1.146a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L10.793 6.5 6.146 1.854a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </template>
  </nav>
</template>

<style scoped>
.breadcrumb {
  align-items: center;
  color: #323333;
  margin-top: 1rem;
  opacity: 0.3;
  display: flex;
}

.breadcrumb svg {
  margin: 0 10px;
}

.breadcrumb span {
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;
}

.breadcrumb span:hover {
  opacity: 0.6;
}

.breadcrumb .linked {
  color: #323333;
}
</style>
