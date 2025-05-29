<template>
  <div class="course-nav">
    <div class="header">
      <h1>iSKI 課程管理</h1>
      <LocationSelector />
    </div>
    <div class="button-grid">
      <a 
        v-for="link in links" 
        :key="link.id"
        :href="link.url"
        target="_blank"
        class="nav-button"
        :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${link.bgImage})` }"
      >
        <span class="button-text">{{ link.text }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import LocationSelector from './LocationSelector.vue'

interface NavLink {
  id: string
  text: string
  url: string
  bgImage: string
}

const links: NavLink[] = [
  {
    id: 'booking',
    text: '預約課程',
    url: 'https://www.iski.com.tw/member/booking&board_id=1&location_id=7',
    bgImage: '/image/1.webp'
  },
  {
    id: 'reserved',
    text: '已約課程',
    url: 'https://www.iski.com.tw/index.php?route=account/reserv_record&location_id=7&page=1&filter=1',
    bgImage: '/image/7.webp'
  },
  {
    id: 'lottery',
    text: '待抽籤',
    url: 'https://www.iski.com.tw/index.php?route=account/reserv_record&location_id=7&page=1&filter=4',
    bgImage: '/image/6.webp'
  },
  {
    id: 'not-selected',
    text: '未中籤',
    url: 'https://www.iski.com.tw/index.php?route=account/reserv_record&location_id=7&page=1&filter=5',
    bgImage: '/image/3.webp'
  },
  {
    id: 'completed',
    text: '已上課',
    url: 'https://www.iski.com.tw/index.php?route=account/reserv_record&location_id=7&page=1&filter=0',
    bgImage: '/image/4.webp'
  },
  {
    id: 'absent',
    text: '缺席',
    url: 'https://www.iski.com.tw/index.php?route=account/reserv_record&location_id=7&page=1&filter=3',
    bgImage: '/image/2.webp'
  }
]
</script>

<style scoped>
.course-nav {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
}

h1 {
  text-align: left;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.nav-button {
  display: block;
  padding: 2rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  filter: brightness(1.1);
}

.button-text {
  font-size: 2rem;
  font-weight: 500;
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .header {
    padding: 1.5rem 1rem;
  }

  h1 {
    font-size: 3rem;
  }

  .button-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .nav-button {
    padding: 1.5rem 1rem;
  }
  
  .button-text {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 1rem 0.75rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .button-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 0 0.75rem;
  }
  
  .nav-button {
    padding: 1.25rem 0.75rem;
  }
  
  .button-text {
    font-size: 1.6rem;
  }
}
</style> 