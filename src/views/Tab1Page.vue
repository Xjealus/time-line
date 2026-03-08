<template>
  <div class="timeline-page-wrapper">
    <div class="timeline-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container" data-aos="zoom-in">
          <h1 class="mb-3">Humanity</h1>
          <p class="lead text-white-50">การเดินทางที่ยิ่งใหญ่ของเผ่าพันธุ์มนุษย์ผ่านกาลเวลา</p>
          <div class="mt-5">
            <i data-lucide="chevron-down" class="text-gold animate-bounce" style="width: 48px; height: 48px; color: #d4af37;"></i>
          </div>
        </div>
      </section>

      <!-- Timeline Container -->
      <div class="container timeline-section">
        <div class="timeline-line"></div>

        <!-- 1. Prehistoric Era -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="content-box era-card" @click="navigateTo('prehistoric')" data-aos="fade-right">
            <span class="era-date">2.5 ล้านปีก่อน - 3,000 ปีก่อน ค.ศ.</span>
            <h2 class="era-title">ยุคก่อนประวัติศาสตร์</h2>
            <p style="margin-bottom: 0; opacity: 0.7; font-size: 0.9rem;">คลิกเพื่อดูรายละเอียด →</p>
            <div class="image-placeholder"></div>
          </div>
        </div>

        <!-- 2. Ancient Civilizations -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="content-box era-card" @click="navigateTo('ancient')" data-aos="fade-left">
            <span class="era-date">3,000 ปีก่อน ค.ศ. - ค.ศ. 500</span>
            <h2 class="era-title">อารยธรรมโบราณ</h2>
            <p style="margin-bottom: 0; opacity: 0.7; font-size: 0.9rem;">คลิกเพื่อดูรายละเอียด →</p>
            <div class="image-placeholder"></div>
          </div>
        </div>

        <!-- 3. Middle Ages -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="content-box era-card" @click="navigateTo('middle-ages')" data-aos="fade-right">
            <span class="era-date">ค.ศ. 500 - ค.ศ. 1450</span>
            <h2 class="era-title">ยุคกลาง</h2>
            <p style="margin-bottom: 0; opacity: 0.7; font-size: 0.9rem;">คลิกเพื่อดูรายละเอียด →</p>
            <div class="image-placeholder"></div>
          </div>
        </div>

        <!-- 4. Renaissance & Exploration -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="content-box era-card" @click="navigateTo('renaissance')" data-aos="fade-left">
            <span class="era-date">ค.ศ. 1450 - ค.ศ. 1750</span>
            <h2 class="era-title">ยุคฟื้นฟูศิลปวิทยาและการสำรวจ</h2>
            <p style="margin-bottom: 0; opacity: 0.7; font-size: 0.9rem;">คลิกเพื่อดูรายละเอียด →</p>
            <div class="image-placeholder"></div>
          </div>
        </div>

        <!-- 5. Industrial Revolution -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="content-box era-card" @click="navigateTo('industrial')" data-aos="fade-right">
            <span class="era-date">ค.ศ. 1750 - ค.ศ. 1900</span>
            <h2 class="era-title">การปฏิวัติอุตสาหกรรม</h2>
            <p style="margin-bottom: 0; opacity: 0.7; font-size: 0.9rem;">คลิกเพื่อดูรายละเอียด →</p>
            <div class="image-placeholder"></div>
          </div>
        </div>

        <!-- 6. Information Age -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="content-box era-card" @click="navigateTo('information')" data-aos="fade-left">
            <span class="era-date">ค.ศ. 1945 - ปัจจุบัน</span>
            <h2 class="era-title">ยุคข้อมูลข่าวสาร</h2>
            <p style="margin-bottom: 0; opacity: 0.7; font-size: 0.9rem;">คลิกเพื่อดูรายละเอียด →</p>
            <div class="image-placeholder"></div>
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <p class="text-white-50">© 2024 The Great Human Journey | ออกแบบเพื่อการเรียนรู้ประวัติศาสตร์</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

const navigateTo = (era: string) => {
  // Navigate to detail page for each era
  router.push(`/era/${era}`);
};

onMounted(() => {
  // Initialize scroll animations
  if ((window as any).AOS) {
    (window as any).AOS.init({
      duration: 1200,
      once: false,
      mirror: true
    });
  }

  // Initialize Lucide Icons
  if ((window as any).lucide) {
    (window as any).lucide.createIcons();
  }
});
</script>

<style scoped>
:root {
  --bg-dark: #0a0a0a;
  --accent-gold: #d4af37;
  --text-light: #e0e0e0;
  --timeline-line: #333;
}

.timeline-page-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.timeline-page {
  font-family: 'Kanit', sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-light);
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero {
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
              url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
}

.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  color: var(--accent-gold);
  text-transform: uppercase;
  letter-spacing: 5px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
}

/* Timeline Styles */
.timeline-section {
  padding: 100px 0;
  position: relative;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--timeline-line);
  transform: translateX(-50%);
}

.timeline-item {
  margin-bottom: 120px;
  position: relative;
  z-index: 1;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 20px;
  width: 20px;
  height: 20px;
  background: var(--accent-gold);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 15px var(--accent-gold);
}

.content-box {
  width: 45%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.content-box:hover {
  transform: translateY(-10px);
  border-color: var(--accent-gold);
}

.timeline-item:nth-child(even) .content-box {
  margin-left: auto;
}

.era-card {
  cursor: pointer;
}

.era-title {
  color: var(--accent-gold);
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 15px;
}

.era-date {
  font-weight: 300;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 10px;
  opacity: 0.7;
}

.image-placeholder {
  width: 100%;
  height: 200px;
  background: #1a1a1a;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

@media (max-width: 992px) {
  .timeline-line {
    left: 30px;
  }
  
  .timeline-dot {
    left: 30px;
  }
  
  .content-box {
    width: calc(100% - 80px);
    margin-left: 80px !important;
  }
}

footer {
  padding: 50px 0;
  text-align: center;
  border-top: 1px solid var(--timeline-line);
  background: #050505;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Bootstrap Container Override for Scoped Styles */
:deep(.container) {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

:deep(.lead) {
  font-size: 1.25rem;
  font-weight: 300;
}

:deep(.text-white-50) {
  color: rgba(255, 255, 255, 0.5);
}

:deep(.mb-3) {
  margin-bottom: 1rem;
}

:deep(.mt-5) {
  margin-top: 3rem;
}
</style>
