<template>
  <div class="location-selector">
    <button 
      class="location-button"
      @click="toggleDropdown"
      :class="{ active: isOpen }"
    >
      {{ currentLocation.name }}
      <span class="arrow">▼</span>
    </button>
    
    <div v-if="isOpen" class="dropdown-menu">
      <button
        v-for="location in locations"
        :key="location.id"
        class="location-option"
        :class="{ active: location.id === currentLocation.id }"
        @click="selectLocation(location)"
      >
        {{ location.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Location {
  id: number
  name: string
}

const locations: Location[] = [
  { id: 1, name: '內湖' },
  { id: 2, name: '新竹' },
  { id: 4, name: '桃園' },
  { id: 5, name: '日本' },
  { id: 6, name: '瑞光' },
  { id: 7, name: '台中' }
]

const isOpen = ref(false)
const selectedLocationId = ref(7)

const currentLocation = computed(() => {
  return locations.find(loc => loc.id === selectedLocationId.value) || locations[5]
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLocation = (location: Location) => {
  selectedLocationId.value = location.id
  isOpen.value = false
  // 更新所有連結中的 location_id
  updateAllLinks(location.id)
}

const updateAllLinks = (locationId: number) => {
  const links = document.querySelectorAll('a[href*="location_id="]')
  links.forEach(link => {
    const href = link.getAttribute('href')
    if (href) {
      const newHref = href.replace(/location_id=\d+/, `location_id=${locationId}`)
      link.setAttribute('href', newHref)
    }
  })
}
</script>

<style scoped>
.location-selector {
  position: relative;
  z-index: 1000;
}

.location-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.location-button:hover {
  background-color: #3aa876;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.location-button.active {
  background-color: #3aa876;
}

.arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.location-button.active .arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  overflow: hidden;
}

.location-option {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: #2c3e50;
  transition: all 0.2s ease;
}

.location-option:hover {
  background-color: #f5f7fa;
}

.location-option.active {
  background-color: #42b883;
  color: white;
}

@media (max-width: 768px) {
  .location-selector {
    right: 0.5rem;
  }
  
  .location-button {
    padding: 0.35rem 0.7rem;
    font-size: 1rem;
  }
  
  .dropdown-menu {
    min-width: 100px;
  }
  
  .location-option {
    padding: 0.5rem 0.7rem;
    font-size: 1rem;
  }
}
</style> 