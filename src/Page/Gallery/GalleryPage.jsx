import React, { useState, useEffect, useMemo } from 'react'
import { NEWS_CATEGORIES } from './GalleryPageData'

/**
 * ============================================================================
 * EMBEDDED ALBUM STYLES (No external CSS file needed)
 * ============================================================================
 */
const ALBUM_STYLES = `
:root {
  --vintage-leather-base: #38160B;
  --vintage-leather-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%235A2816'/%3E%3Cpath d='M6.1,9.4L0.9,-0.5L1.9,-2.5L13.7,0.3L12.5,10.9ZM6.1,169.4L0.9,159.5L1.9,157.5L13.7,160.3L12.5,170.9ZM16.1,60L12.3,69.8L1.3,68.6L-1.6,63.6L3.1,52.7L14.7,56.8ZM176.1,60L172.3,69.8L161.3,68.6L158.4,63.6L163.1,52.7L174.7,56.8ZM13.7,120.3L13.8,123.5L1.8,132.2L-1.8,129.7L4.1,117.4ZM173.7,120.3L173.8,123.5L161.8,132.2L158.2,129.7L164.1,117.4ZM27.5,29.1L16.8,21.1L17.1,15.5L25.4,12.2L27.9,13.1L29.5,27.6ZM13.4,86.7L16.3,76.2L26.7,78L27.9,78.9L29.9,87.1L26.7,90L13.7,87.9ZM18.2,139.8L18.6,128.6L32.2,131.1L32.4,131.4L26.8,142.3ZM28.1,38.4L29.1,30.9L31.1,29.4L39.9,26.2L45.9,30.5L39.6,40.9ZM38.5,91.2L41.5,100.2L40.7,101.6L27.8,101.5L27,101.1L28.3,91.8L31.5,89ZM30.8,-6.2L31.7,-10.2L45.7,-12.9L45.8,-12.9L46.9,-6.1L40.1,2.1ZM30.8,153.8L31.7,149.8L45.7,147.1L45.8,147.1L46.9,153.9L40.1,162.1ZM45.7,54.3L45.9,50.4L57.6,40.2L58.1,40.8L56.4,55.9ZM54.5,116L49.2,116.1L43.7,113L43.1,103.3L43.8,101.9L52.3,100.1L58.6,105.8L57,114.4ZM70.7,8.5L67.8,12L58.4,12.1L55.7,10.1L55.8,0.8L59.9,-1.4L70.9,6.9ZM70.7,168.5L67.8,172L58.4,172.1L55.7,170.1L55.8,160.8L59.9,158.6L70.9,166.9ZM73.8,73.7L65.4,73.6L62.3,70.1L63,60.9L68.7,57.5L73.4,60L77.4,70.7ZM58.7,116.4L69.7,119.4L66.8,130.7L59,129.7L56.1,118ZM78.5,28.6L72.5,24.6L69.8,13.8L72.7,10.3L85.8,14.1L81.4,28ZM78.7,86.3L75.6,75.2L79.2,72.3L85,71.8L89.1,75L84.9,86.2ZM85.6,132L90.2,133.8L91.4,143.6L86.1,148.2L75.7,138.6ZM95.6,31.3L97.9,38.1L89.3,46L86.3,31.2ZM97.2,99.8L96.4,100.6L91.5,100.9L88.2,89.9L102.1,86.9ZM102.4,-5.5L95.3,1.4L93.9,1.7L85.9,-5L87.3,-9.7L92.5,-14.3L101.5,-10.4ZM102.4,154.5L95.3,161.4L93.9,161.7L85.9,155L87.3,150.3L92.5,145.7L101.5,149.6ZM114.9,46.9L116.1,52.2L111.7,59.2L103.3,60L97.8,55.9L106.3,44.2L113.5,44.8ZM113.8,102.2L112.8,112.2L105.4,115.1L98.1,102L98.9,101.3L113.3,101.7ZM130.8,3.9L129.5,10.9L115.5,14.1L112.5,11.9L114.3,0L119.5,-2.1L126.2,-0.4ZM130.8,163.9L129.5,170.9L115.5,174.1L112.5,171.9L114.3,160L119.5,157.9L126.2,159.6ZM117.8,53.7L127.6,57.2L129.7,67.6L120.7,70.8L115.4,66.4L113.3,60.7ZM131.3,121.5L130.9,130.8L129.5,132.9L117.5,134.7L115.3,132.6L122.2,118.8L128.6,119.3ZM135.4,19.3L146.2,19.5L148.1,29.5L147.2,29.9L133.5,27.2ZM146,87.4L143.4,91.3L130.4,90L128.7,87L137.7,76ZM145.5,144.9L143.1,147.3L132.1,142.8L131.3,134.7L132.8,132.6L144.9,137ZM157.5,42.9L147.9,45.5L142.4,40.3L148.4,31.6L149.2,31.2L157.9,34.7ZM-14.5,92.5L-11.9,88.5L-6.8,87.2L1,100.6L-1,103L-14.2,97.3ZM145.5,92.5L148.1,88.5L153.2,87.2L161,100.6L159,103L145.8,97.3ZM-0.2,-3.8L-1.2,-1.8L-10.3,1.8L-16.6,-1.3L-15,-10.7L-12.6,-13.1L0.3,-11.4ZM-0.2,156.2L-1.2,158.2L-10.3,161.8L-16.6,158.7L-15,149.3L-12.6,146.9L0.3,148.6ZM159.8,-3.8L158.8,-1.8L149.7,1.8L143.4,-1.3L145,-10.7L147.4,-13.1L160.3,-11.4ZM159.8,156.2L158.8,158.2L149.7,161.8L143.4,158.7L145,149.3L147.4,146.9L160.3,148.6Z' fill='%232E1006' stroke='%23481F10' stroke-width='0.8' stroke-linejoin='round'/%3E%3Cpath d='M15,15.4L14.6,21L8.3,27L3.6,28.2L-1.7,16.9L6.3,11.6L12.7,13.1ZM175,15.4L174.6,21L168.3,27L163.6,28.2L158.3,16.9L166.3,11.6L172.7,13.1ZM12,71.9L13.9,75.3L11,85.8L-3.5,83.2L-1.7,74.9L1,70.7ZM172,71.9L173.9,75.3L171,85.8L156.5,83.2L158.3,74.9L161,70.7ZM10.4,142.7L5.9,142.7L2.4,133.7L14.4,125L16.5,128.7L16.2,139.9ZM26,38.7L25.3,39.5L21.1,41.2L18.5,40.1L10,29.2L16.4,23.2L27,31.2ZM17.5,103.4L11.5,98.5L13.3,89.7L26.2,91.8L24.9,101.1ZM29.2,149.4L28.3,153.3L26,155.5L17.8,156.2L12,144.7L17.8,141.9L26.3,144.4ZM40.2,57.9L34.5,57.6L27.6,41.5L28.3,40.8L39.8,43.2L43.7,50.5L43.5,54.5ZM41.6,113.3L34,117.1L32.3,116.3L28,103.5L41,103.6ZM42,10.2L41.1,3.8L48,-4.5L53.7,0.3L53.6,9.6ZM42,170.2L41.1,163.8L48,155.5L53.7,160.3L53.6,169.6ZM60.4,60.6L59.7,69.7L46.6,72.1L45.7,71.2L42.2,59.9L45.4,56.5L56.1,58.1ZM54.9,118.4L57.7,130.1L55.8,131.9L46.7,129.5L49.6,118.4ZM67.7,14.2L70.4,25L57.7,32.4L53.7,29.4L58.3,14.3ZM71.3,93.5L62.5,86.7L65.5,76L74,76.1L77,87.2ZM71,138.8L66.6,145.7L64.5,146L55.4,142.9L57.2,133.8L59.1,131.9L67,133ZM87,48.2L76,42.4L79.3,31.2L82.3,30.6L85,31.5L88,46.3ZM85.1,104L73,96.1L72.9,95L78.6,88.7L84.8,88.6L86.3,89.8L89.6,100.7ZM83.4,154.2L75.7,156.9L68.5,146.9L72.9,140L74.4,139.8L84.8,149.5ZM90.8,54.7L89.5,53.3L88.5,49.7L89.5,47.8L98.1,39.8L104.2,43.8L95.7,55.5ZM86.9,106.1L91.4,102.8L96.3,102.6L103.7,115.7L101.7,118.5L85.4,112.9ZM104.1,-4.1L112.3,-0.1L110.5,11.8L107.6,12.1L97,2.9ZM104.1,155.9L112.3,159.9L110.5,171.8L107.6,172.1L97,162.9ZM99,74.6L102.8,62.4L111.3,61.6L113.3,67.2L103.2,78.8ZM106.2,130L103,127.1L103.8,120.4L105.8,117.5L113.2,114.6L120,118.2L113.1,132ZM133,19L131.1,27L130.7,27.7L118.4,30.1L117,28.2L116.1,16.6L130.1,13.4ZM120.6,82.7L121.9,72.7L130.8,69.5L136.5,72.9L136.6,74.6L127.6,85.6ZM130.1,142.9L129.8,143.3L118.7,145.3L116.9,142.8L117.3,136.6L129.3,134.8ZM135.5,38.4L132.4,29.1L132.9,28.4L146.6,31L140.6,39.6ZM143.6,97.7L141.7,101.2L131.4,103.1L128.5,99.1L130.2,91.6L143.3,92.8ZM132.6,2.1L128.1,-2.2L131.3,-15L131.6,-15.4L142.5,-10.9L140.9,-1.5ZM132.6,162.1L128.1,157.8L131.3,145L131.6,144.6L142.5,149.1L140.9,158.5ZM-12.6,60.1L-14.8,54.4L-11.7,47.5L-2.1,44.9L-1.4,45.6L1.1,51.4L-3.6,62.2ZM147.4,60.1L145.2,54.4L148.3,47.5L157.9,44.9L158.6,45.6L161.1,51.4L156.4,62.2ZM157.4,110.1L146.9,114.7L143.7,102.4L145.6,98.9L158.8,104.6Z' fill='%23351408' stroke='%23481F10' stroke-width='0.8' stroke-linejoin='round'/%3E%3Cpath d='M-0.5,42.8L-0.2,34.6L3,30.7L7.8,29.5L16.2,40.4L0.2,43.5ZM159.5,42.8L159.8,34.6L163,30.7L167.8,29.5L176.2,40.4L160.2,43.5ZM11.2,88.9L9.5,97.7L2.7,100.1L-5.1,86.6L-3.6,85.2L10.9,87.8ZM171.2,88.9L169.5,97.7L162.7,100.1L154.9,86.6L156.4,85.2L170.9,87.8ZM2.5,148.2L5.5,145L10,145L15.8,156.5L13.9,158.6L2,155.9ZM30.6,59.1L18.5,58.8L17,55.6L21.6,43.7L25.8,42L32.8,58.1ZM17.7,116.4L18.2,105L25.6,102.8L26.4,103.2L30.6,116ZM39.9,10.5L39.5,11L29.2,11.2L26.6,10.3L27.5,-2.2L29.8,-4.4L39.1,4ZM39.9,170.5L39.5,171L29.2,171.2L26.6,170.3L27.5,157.8L29.8,155.6L39.1,164ZM34.2,60.2L39.9,60.4L43.4,71.7L29.7,76.7L28.5,75.7L32.1,61.2ZM34.4,130L34.2,129.7L34.7,119.1L42.2,115.3L47.8,118.3L44.9,129.4L41.5,132.2ZM47.6,28.6L41.6,24.3L41.5,12.8L42,12.3L53.6,11.7L56.3,13.7L51.7,28.8ZM63.6,75.4L60.6,86.1L56.7,87.2L48.1,82.5L47.4,74.2L60.5,71.9ZM46.9,145.2L46.9,145.2L42.7,134.1L46.1,131.4L55.2,133.8L53.4,142.9ZM77.1,30.9L73.8,42.1L69.8,44.3L60.1,39.1L59.6,38.6L58.5,34.3L71.2,26.9ZM61.6,88.4L70.4,95.2L70.5,96.3L67.9,99.8L60.4,104L54.1,98.3L57.7,89.5ZM67.2,-12L74.4,-2L71.6,5.3L60.6,-3L65.2,-11.7ZM67.2,148L74.4,158L71.6,165.3L60.6,157L65.2,148.3ZM71.2,46.4L75.2,44.2L86.2,50L87.2,53.5L74.5,57.9L69.8,55.3ZM83.1,112.7L79.9,116.4L74.4,116.4L69.9,101.6L72.5,98L84.5,106ZM98.6,19.3L90.3,12.2L94.3,4L95.7,3.7L106.3,13ZM90.7,73.3L86.7,70.1L90.8,57L95.7,57.8L101.1,61.9L97.3,74.1ZM100.4,127.2L90.9,131.6L86.3,129.9L81.8,118.5L85,114.8L101.2,120.5ZM110.7,13.9L113.6,16.1L114.6,27.7L99.8,26.2L100.1,20.6L107.8,14.3ZM112,85.6L105.4,83.5L104.1,80.2L114.2,68.6L119.5,73.1L118.2,83ZM113.3,134.2L115.5,136.2L115.1,142.4L104.1,147.1L106.4,132.2ZM115.7,42.9L118.3,32.2L130.6,29.8L133.7,39L132.9,40L117.1,44.9ZM119.4,85L126.4,87.9L128,90.9L126.3,98.4L115.7,100.4L115.2,99.9L113.2,87.5ZM119.8,155.9L118.7,146.8L129.8,144.7L126.6,157.6ZM135.7,40.1L140.8,41.4L146.3,46.6L143.1,53.6L133.4,52.9L134.9,41.1ZM144.4,116.6L133,119.6L130.4,117.3L131.6,105.3L141.9,103.4L145.1,115.7ZM-3.3,15.5L-7.7,14.3L-9.7,3.8L-0.6,0.2L4.6,10.2ZM156.7,15.5L152.3,14.3L150.3,3.8L159.4,0.2L164.6,10.2ZM159,69.5L156.4,73.7L139.9,71.6L147.2,62.4L156.2,64.4ZM-7.2,128.4L-13.3,117.6L-12.7,116.7L-2.1,112.1L2.3,116.7L-3.5,129ZM152.8,128.4L146.7,117.6L147.3,116.7L157.9,112.1L162.3,116.7L156.5,129Z' fill='%233B170B' stroke='%23481F10' stroke-width='0.8' stroke-linejoin='round'/%3E%3Cpath d='M19.8,42.9L15.2,54.7L3.6,50.6L1.1,44.9L17.2,41.8ZM1.2,105L3.3,102.6L10,100.2L16,105.1L15.5,116.4L14,118.1L4.3,115.2L-0.1,110.6ZM161.2,105L163.3,102.6L170,100.2L176,105.1L175.5,116.4L174,118.1L164.3,115.2L159.9,110.6ZM16.4,13.4L14.1,11.1L15.4,0.5L17.3,-1.6L25.5,-2.3L24.6,10.2ZM16.4,173.4L14.1,171.1L15.4,160.5L17.3,158.4L25.5,157.7L24.6,170.2ZM16.1,74.1L14.1,70.8L18,61L30.1,61.3L26.6,75.9ZM32.3,118.7L31.9,129.3L18.2,126.8L16.1,123.1L16.1,119.9L17.6,118.2L30.6,117.9ZM39.8,24.4L31,27.6L29.4,13.1L39.8,12.9ZM32.3,86.7L30.3,78.5L44.1,73.6L45,74.4L45.8,82.7L39.4,89ZM31.1,148.2L28.2,143.2L33.8,132.3L41,134.4L45.1,145.5ZM41.6,41.6L47.9,31.2L52.1,31.4L56.1,34.4L57.2,38.7L45.5,48.9ZM43.4,99.6L40.5,90.6L46.9,84.3L55.6,89L51.9,97.8ZM54.6,158.6L49,153.8L47.8,147L54.3,144.7L63.3,147.8L58.8,156.4ZM67.9,55.4L62.2,58.8L57.9,56.4L59.6,41.2L69.3,46.5ZM70.3,117.9L59.3,114.8L60.8,106.2L68.4,102L72.8,116.8ZM88.2,11.4L86.6,12.1L73.5,8.3L73.6,6.7L76.4,-0.6L84.2,-3.4L92.2,3.3ZM88.2,171.4L86.6,172.1L73.5,168.3L73.6,166.7L76.4,159.4L84.2,156.6L92.2,163.3ZM89.4,56.5L85.2,69.6L79.4,70.1L75.4,59.4L88,55.1ZM74,119.1L79.6,119.1L84.1,130.4L74.2,137L72.6,137.2L68.7,131.4L71.5,120.1ZM95.4,29.5L86.1,29.4L83.4,28.5L87.8,14.6L89.5,14L97.8,21.1L97.5,26.7ZM101.8,80.6L103.1,84L102.2,85L88.3,88.1L86.8,86.9L91,75.7L97.6,76.5ZM102.2,147.5L93.3,143.6L92.1,133.7L101.6,129.3L104.8,132.3L102.5,147.2ZM115.8,31.7L113.2,42.4L106,41.7L99.9,37.8L97.6,31L99.6,28.3L114.4,29.8ZM104.6,85.3L111.2,87.3L113.2,99.7L98.8,99.3L103.7,86.3ZM112.9,158L104.7,154L103.8,149.2L104.1,148.8L115.1,144.2L116.9,146.7L118,155.8ZM128.3,55.4L118.5,51.9L117.2,46.6L133.1,41.6L131.6,53.4ZM121.9,116.2L115.1,112.7L116,102.7L126.6,100.7L129.5,104.7L128.3,116.8ZM146.1,17.4L135.2,17.2L132.3,11.5L133.5,4.5L141.8,0.9L148.1,4L150.1,14.5ZM145.1,61.6L137.8,70.8L137.6,71L131.9,67.6L129.8,57.2L133.1,55.2L142.8,55.9ZM133.6,121.5L145,118.6L151.1,129.4L145.4,135.2L133.3,130.8ZM-1.6,32.8L-10.2,29.3L-12.1,19.4L-8,16.5L-3.7,17.7L1.6,28.9ZM158.4,32.8L149.8,29.3L147.9,19.4L152,16.5L156.3,17.7L161.6,28.9ZM153.9,83.5L152.4,84.9L147.4,86.3L139,74.9L139,73.2L139.2,73.1L155.7,75.1ZM-3.3,131.6L0.3,134.1L3.7,143.1L0.8,146.3L-12.1,144.7L-12.6,136.7L-6.9,130.9ZM156.7,131.6L160.3,134.1L163.7,143.1L160.8,146.3L147.9,144.7L147.4,136.7L153.1,130.9Z' fill='%23441B0E' stroke='%23481F10' stroke-width='0.8' stroke-linejoin='round'/%3E%3C/svg%3E");
}
.vintage-leather-surface {
  background-color: var(--vintage-leather-base);
  background-image: 
    radial-gradient(ellipse at 40% 30%, rgba(255, 200, 150, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 80%, rgba(0, 0, 0, 0.35) 0%, transparent 70%),
    var(--vintage-leather-pattern);
  background-repeat: repeat;
  background-size: 160px 160px;
}
.vintage-binding-surface {
  background-color: var(--vintage-leather-base);
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.4) 100%),
    var(--vintage-leather-pattern);
  background-repeat: repeat;
  background-size: 160px 160px;
}
.vintage-body-surface {
  background-color: var(--vintage-leather-base);
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.28) 0%, transparent 12%, transparent 92%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 0%, transparent 15%, transparent 85%, rgba(0, 0, 0, 0.3) 100%),
    var(--vintage-leather-pattern);
  background-repeat: repeat;
  background-size: 160px 160px;
}
.vintage-album-shadow {
  box-shadow: 
    10px 14px 22px -4px rgba(45, 25, 15, 0.38),
    4px 6px 12px -2px rgba(35, 15, 8, 0.26),
    inset 0 1px 1px rgba(255, 255, 255, 0.18),
    inset 0 -2px 4px rgba(0, 0, 0, 0.45);
}
.preserve-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
@keyframes cardDropFromTop {
  0% { opacity: 0; transform: translateY(-38px) scale(0.94); }
  65% { opacity: 1; transform: translateY(2px) scale(1.01); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes cardSlideFromLeft {
  0% { opacity: 0; transform: translateX(-38px) scale(0.94); }
  65% { opacity: 1; transform: translateX(2px) scale(1.01); }
  100% { opacity: 1; transform: translateX(0) scale(1); }
}
@keyframes cardSlideFromRight {
  0% { opacity: 0; transform: translateX(38px) scale(0.94); }
  65% { opacity: 1; transform: translateX(-2px) scale(1.01); }
  100% { opacity: 1; transform: translateX(0) scale(1); }
}
.animate-card-top {
  animation: cardDropFromTop 450ms cubic-bezier(0.22, 1, 0.36, 1) both;
}
.animate-card-left {
  animation: cardSlideFromLeft 450ms cubic-bezier(0.22, 1, 0.36, 1) both;
}
.animate-card-right {
  animation: cardSlideFromRight 450ms cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes pageTurnNext {
  0% { transform: rotateY(0deg); box-shadow: -4px 0 16px rgba(25, 10, 4, 0.15); }
  30% { transform: rotateY(-52deg) skewY(-1deg); box-shadow: -22px 6px 36px rgba(25, 10, 4, 0.48); }
  50% { box-shadow: -32px 0 50px rgba(25, 10, 4, 0.58); }
  70% { transform: rotateY(-128deg) skewY(1deg); box-shadow: 22px 6px 36px rgba(25, 10, 4, 0.48); }
  100% { transform: rotateY(-180deg); box-shadow: 4px 0 16px rgba(25, 10, 4, 0.15); }
}
@keyframes pageTurnPrev {
  0% { transform: rotateY(0deg); box-shadow: 4px 0 16px rgba(25, 10, 4, 0.15); }
  30% { transform: rotateY(52deg) skewY(1deg); box-shadow: 22px 6px 36px rgba(25, 10, 4, 0.48); }
  50% { box-shadow: 32px 0 50px rgba(25, 10, 4, 0.58); }
  70% { transform: rotateY(128deg) skewY(-1deg); box-shadow: -22px 6px 36px rgba(25, 10, 4, 0.48); }
  100% { transform: rotateY(180deg); box-shadow: -4px 0 16px rgba(25, 10, 4, 0.15); }
}
.animate-page-turn-next {
  animation: pageTurnNext 680ms cubic-bezier(0.38, 0.05, 0.4, 0.98) forwards;
  transform-origin: left center;
}
.animate-page-turn-prev {
  animation: pageTurnPrev 680ms cubic-bezier(0.38, 0.05, 0.4, 0.98) forwards;
  transform-origin: right center;
}
@keyframes pageCurlShadowFront {
  0% { opacity: 0; }
  35% { opacity: 0.35; }
  50% { opacity: 0.55; }
  100% { opacity: 0.85; }
}
@keyframes pageCurlShadowBack {
  0% { opacity: 0.85; }
  50% { opacity: 0.55; }
  65% { opacity: 0.35; }
  100% { opacity: 0; }
}
.animate-page-shade-front {
  animation: pageCurlShadowFront 680ms ease-in-out forwards;
}
.animate-page-shade-back {
  animation: pageCurlShadowBack 680ms ease-in-out forwards;
}

/* Page Entrance & Refresh Animations */
@keyframes galleryPageFadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes galleryBadgeIn {
  0% { opacity: 0; transform: translateY(-16px) scale(0.92); }
  65% { opacity: 1; transform: translateY(2px) scale(1.02); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes galleryTitleIn {
  0% { opacity: 0; transform: translateY(-20px); filter: blur(4px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes galleryLineExpand {
  0% { opacity: 0; transform: scaleX(0); }
  100% { opacity: 1; transform: scaleX(1); }
}
@keyframes galleryDescIn {
  0% { opacity: 0; transform: translateY(14px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes galleryAlbumEntrance {
  0% { opacity: 0; transform: translateY(36px) scale(0.95); }
  60% { opacity: 1; transform: translateY(-3px) scale(1.006); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes albumOpenBtnPulse {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 14px rgba(0,0,0,0.75), inset 0 1px 2px rgba(255,230,160,0.35); }
  50% { transform: scale(1.03); box-shadow: 0 6px 20px rgba(232, 197, 130, 0.45), inset 0 1px 3px rgba(255,230,160,0.6); }
}
.anim-gallery-page {
  animation: galleryPageFadeIn 450ms ease-out both;
}
.anim-gallery-badge {
  animation: galleryBadgeIn 650ms cubic-bezier(0.16, 1, 0.3, 1) 50ms both;
}
.anim-gallery-title {
  animation: galleryTitleIn 700ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
}
.anim-gallery-line {
  animation: galleryLineExpand 750ms cubic-bezier(0.16, 1, 0.3, 1) 220ms both;
  transform-origin: center;
}
.anim-gallery-desc {
  animation: galleryDescIn 700ms cubic-bezier(0.16, 1, 0.3, 1) 280ms both;
}
.anim-gallery-album {
  animation: galleryAlbumEntrance 850ms cubic-bezier(0.16, 1, 0.3, 1) 180ms both;
}
.anim-album-btn-pulse {
  animation: albumOpenBtnPulse 3s ease-in-out infinite;
}
`

/**
 * Default Vintage Sepia Placeholder Image (Data URI SVG)
 */
const DEFAULT_VINTAGE_PLACEHOLDER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%"><defs><linearGradient id="sepiaGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%235C3E25"/><stop offset="50%" stop-color="%239E7954"/><stop offset="100%" stop-color="%23D6BA94"/></linearGradient><radialGradient id="sun" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="%23FFF6E3" stop-opacity="0.85"/><stop offset="50%" stop-color="%23E2BE86" stop-opacity="0.4"/><stop offset="100%" stop-color="%238E6133" stop-opacity="0"/></radialGradient></defs><rect width="100%" height="100%" fill="url(%23sepiaGrad)"/><circle cx="150" cy="115" r="50" fill="url(%23sun)"/><path d="M -20 220 Q 70 140 160 185 T 320 225 L 320 320 L -20 320 Z" fill="%234A2F17" opacity="0.9"/><path d="M 60 245 Q 180 175 320 235 L 320 320 L 60 320 Z" fill="%232E1A0B"/><g transform="translate(132, 98) scale(0.75)" opacity="0.8"><rect x="0" y="8" width="48" height="32" rx="4" fill="%231E1005" stroke="%23F7E5C3" stroke-width="2"/><circle cx="24" cy="24" r="9" fill="%23381E0A" stroke="%23F7E5C3" stroke-width="2"/><circle cx="24" cy="24" r="3.5" fill="%23F7E5C3"/><rect x="30" y="3" width="10" height="5" rx="1.5" fill="%23F7E5C3"/></g><rect width="100%" height="100%" fill="none" stroke="%23241103" stroke-width="10" opacity="0.45"/></svg>`

/**
 * Responsive Mobile Detection Hook
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 640
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

/**
 * State Persistence helper (URL + localStorage)
 */
const getSavedAlbumState = () => {
  if (typeof window === 'undefined') return { isOpen: false, page: 1 }
  try {
    const params = new URLSearchParams(window.location.search)
    const urlPage = parseInt(params.get('page'), 10)
    const savedOpen = localStorage.getItem('album_open')
    const savedPage = parseInt(localStorage.getItem('album_page'), 10)

    let page = 1
    if (!isNaN(urlPage) && urlPage >= 1 && urlPage <= 10) {
      page = urlPage
    } else if (!isNaN(savedPage) && savedPage >= 1 && savedPage <= 10) {
      page = savedPage
    }

    const isOpen = params.has('page') || savedOpen === 'true'
    return { isOpen, page }
  } catch {
    return { isOpen: false, page: 1 }
  }
}

/**
 * 1. GoldenRings Subcomponent
 */
function GoldenRings({ className = '' }) {
  return (
    <g className={className}>
      <defs>
        <linearGradient id="goldRingGradient" x1="25%" y1="20%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="25%" stopColor="#E5B551" />
          <stop offset="55%" stopColor="#B37822" />
          <stop offset="80%" stopColor="#784B10" />
          <stop offset="100%" stopColor="#E2B75A" />
        </linearGradient>
        <linearGradient id="ringRimHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E0" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#DCA842" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#4A2B06" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFE08A" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="ringHoleGradient" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#301107" />
          <stop offset="65%" stopColor="#1B0703" />
          <stop offset="100%" stopColor="#0E0301" />
        </radialGradient>
        <filter id="ringDropShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#180702" floodOpacity="0.6" />
        </filter>
      </defs>
      <g id="top-ring" filter="url(#ringDropShadow)">
        <circle cx="80" cy="138" r="11" fill="url(#ringHoleGradient)" />
        <circle cx="80" cy="138" r="11" fill="none" stroke="#0B0301" strokeWidth="1" opacity="0.9" />
        <path d="M 80 119 A 19 19 0 1 0 80.001 119 M 80 127.5 A 10.5 10.5 0 1 1 79.999 127.5" fill="url(#goldRingGradient)" fillRule="evenodd" />
        <circle cx="80" cy="138" r="19" fill="none" stroke="url(#ringRimHighlight)" strokeWidth="1" />
        <circle cx="80" cy="138" r="10.5" fill="none" stroke="#503008" strokeWidth="0.8" />
      </g>
      <g id="bottom-ring" filter="url(#ringDropShadow)">
        <circle cx="80" cy="456" r="11" fill="url(#ringHoleGradient)" />
        <circle cx="80" cy="456" r="11" fill="none" stroke="#0B0301" strokeWidth="1" opacity="0.9" />
        <path d="M 80 437 A 19 19 0 1 0 80.001 437 M 80 445.5 A 10.5 10.5 0 1 1 79.999 445.5" fill="url(#goldRingGradient)" fillRule="evenodd" />
        <circle cx="80" cy="456" r="19" fill="none" stroke="url(#ringRimHighlight)" strokeWidth="1" />
        <circle cx="80" cy="456" r="10.5" fill="none" stroke="#503008" strokeWidth="0.8" />
      </g>
    </g>
  )
}

/**
 * 2. BindingRope Subcomponent
 */
function BindingRope({ isUntying = false, className = '' }) {
  const cx = 80
  const upperCordStyle = {
    transform: isUntying ? 'translateY(-26px)' : 'translateY(0)',
    opacity: isUntying ? 0 : 1,
    transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out',
    transformOrigin: `${cx}px 138px`,
  }
  const lowerCordStyle = {
    transform: isUntying ? 'translateY(26px)' : 'translateY(0)',
    opacity: isUntying ? 0 : 1,
    transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out',
    transformOrigin: `${cx}px 456px`,
  }
  const leftLoopStyle = {
    transform: isUntying ? 'translate(-16px, -12px) scale(1.18) rotate(-18deg)' : 'none',
    opacity: isUntying ? 0 : 1,
    transition: 'transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-in-out',
    transformOrigin: `${cx}px 260px`,
  }
  const rightLoopStyle = {
    transform: isUntying ? 'translate(16px, -12px) scale(1.18) rotate(18deg)' : 'none',
    opacity: isUntying ? 0 : 1,
    transition: 'transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-in-out',
    transformOrigin: `${cx}px 260px`,
  }
  const leftTailStyle = {
    transform: isUntying ? 'translate(-20px, 22px) rotate(-16deg)' : 'none',
    opacity: isUntying ? 0 : 1,
    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.55s ease-in-out',
    transformOrigin: `${cx}px 264px`,
  }
  const rightTailStyle = {
    transform: isUntying ? 'translate(20px, 22px) rotate(16deg)' : 'none',
    opacity: isUntying ? 0 : 1,
    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.55s ease-in-out',
    transformOrigin: `${cx}px 264px`,
  }
  const knotStyle = {
    transform: isUntying ? 'scale(1.35) rotate(35deg)' : 'none',
    opacity: isUntying ? 0 : 1,
    transition: 'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-in-out',
    transformOrigin: `${cx}px 260px`,
  }

  return (
    <g className={className}>
      <defs>
        <filter id="ropeDropShadow" x="-30%" y="-10%" width="160%" height="120%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#180702" floodOpacity="0.55" />
        </filter>
      </defs>
      <g filter="url(#ropeDropShadow)">
        <g style={upperCordStyle}>
          <rect x={cx - 3.5} y="140" width="7" height="120" rx="3.5" fill="#180702" opacity="0.45" />
          <rect x={cx - 3.5} y="138" width="7" height="122" rx="3.5" fill="#5E2C12" />
          <line x1={cx - 1.2} y1="140" x2={cx - 1.2} y2="258" stroke="#8E4B24" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
          <line x1={cx + 1.8} y1="140" x2={cx + 1.8} y2="258" stroke="#381507" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        </g>
        <g style={lowerCordStyle}>
          <rect x={cx - 3.5} y="262" width="7" height="194" rx="3.5" fill="#180702" opacity="0.45" />
          <rect x={cx - 3.5} y="260" width="7" height="196" rx="3.5" fill="#5E2C12" />
          <line x1={cx - 1.2} y1="262" x2={cx - 1.2} y2="454" stroke="#8E4B24" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
          <line x1={cx + 1.8} y1="262" x2={cx + 1.8} y2="454" stroke="#381507" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        </g>
        <g style={leftTailStyle}>
          <path d={`M ${cx - 2} 264 C 72 288, 58 312, 46 342`} fill="none" stroke="#5E2C12" strokeWidth="6" strokeLinecap="round" />
          <path d={`M ${cx - 2} 264 C 72 288, 58 312, 46 342`} fill="none" stroke="#8E4B24" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
        </g>
        <g style={rightTailStyle}>
          <path d={`M ${cx + 2} 264 C 88 288, 102 312, 114 342`} fill="none" stroke="#5E2C12" strokeWidth="6" strokeLinecap="round" />
          <path d={`M ${cx + 2} 264 C 88 288, 102 312, 114 342`} fill="none" stroke="#8E4B24" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
        </g>
        <g style={leftLoopStyle}>
          <path d={`M ${cx} 258 C 62 242, 34 228, 24 238 C 14 246, 14 262, 26 268 C 38 274, 62 268, ${cx} 262`} fill="none" stroke="#5E2C12" strokeWidth="6" strokeLinejoin="round" />
          <path d={`M ${cx} 258 C 62 242, 34 228, 24 238 C 14 246, 14 262, 26 268 C 38 274, 62 268, ${cx} 262`} fill="none" stroke="#8E4B24" strokeWidth="1.8" strokeLinejoin="round" opacity="0.75" />
        </g>
        <g style={rightLoopStyle}>
          <path d={`M ${cx} 258 C 98 242, 126 228, 136 238 C 146 246, 146 262, 134 268 C 122 274, 98 268, ${cx} 262`} fill="none" stroke="#5E2C12" strokeWidth="6" strokeLinejoin="round" />
          <path d={`M ${cx} 258 C 98 242, 126 228, 136 238 C 146 246, 146 262, 134 268 C 122 274, 98 268, ${cx} 262`} fill="none" stroke="#8E4B24" strokeWidth="1.8" strokeLinejoin="round" opacity="0.75" />
        </g>
        <g style={knotStyle}>
          <ellipse cx={cx} cy="260" rx="7.5" ry="6.5" fill="#5A280F" stroke="#2A0F04" strokeWidth="0.8" />
          <ellipse cx={cx - 0.5} cy="259.5" rx="5" ry="4" fill="none" stroke="rgba(255, 210, 160, 0.4)" strokeWidth="1.2" />
        </g>
      </g>
    </g>
  )
}

/**
 * 3. AlbumBinding Subcomponent (Left Spine)
 */
function AlbumBinding({ isOpen = false, isUntying = false, className = '' }) {
  return (
    <div
      className={`relative w-[26.6%] h-full rounded-l-[20px] vintage-binding-surface border-r border-[#260C05]/60 z-20 transition-all duration-[850ms] ${className}`}
      style={{
        transformOrigin: 'left center',
        transformStyle: 'preserve-3d',
        transform: isOpen ? 'rotateY(-120deg) translateZ(12px)' : 'rotateY(0deg) translateZ(0px)',
        boxShadow: isOpen ? '-16px 18px 30px rgba(25, 10, 5, 0.55), inset 0 0 20px rgba(0,0,0,0.6)' : 'none',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.05, 0.64, 1)',
      }}
    >
      <div className="absolute inset-0 w-full h-full rounded-l-[20px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/[0.04] via-transparent to-black/30" />
        <div className="absolute inset-0 pointer-events-none bg-black/40 transition-opacity duration-700" style={{ opacity: isOpen ? 0.35 : 0 }} />
        <svg viewBox="0 0 160 600" preserveAspectRatio="none" className="w-full h-full overflow-visible">
          <GoldenRings />
          <BindingRope isUntying={isUntying} />
        </svg>
      </div>
      <div
        className="absolute inset-0 w-full h-full rounded-r-[20px] bg-[#2E1208] border-l border-[#4A2010]/40 overflow-hidden pointer-events-none"
        style={{
          transform: 'rotateY(180deg)',
          backfaceVisibility: 'hidden',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.5) 100%), var(--vintage-leather-pattern)',
          backgroundSize: '160px 160px',
        }}
      >
        <div className="absolute inset-1.5 rounded-r-[18px] border border-amber-900/30 border-dashed opacity-60" />
      </div>
    </div>
  )
}

/**
 * 4. LaceDivider Subcomponent (Vertical Scalloped Border)
 */
function LaceDivider({ className = 'absolute top-0 bottom-0 left-0 -translate-x-[1px] w-[22px] h-full' }) {
  const { scallopPath, eyelets } = useMemo(() => {
    const totalScallops = 60
    const scallopHeight = 10
    const pathParts = ['M 0 0', 'L 5 0']
    const eyeletCoords = []

    for (let i = 0; i < totalScallops; i++) {
      const y = i * scallopHeight
      pathParts.push(`C 15.5 ${(y + 2.5).toFixed(1)}, 15.5 ${(y + 7.5).toFixed(1)}, 5 ${y + scallopHeight}`)
      eyeletCoords.push({ x: 9.5, y: y + 5 })
    }

    pathParts.push('L 0 600', 'Z')
    return { scallopPath: pathParts.join(' '), eyelets: eyeletCoords }
  }, [])

  return (
    <div className={`pointer-events-none z-20 overflow-visible ${className}`}>
      <svg viewBox="0 0 22 600" preserveAspectRatio="none" className="w-full h-full overflow-visible" style={{ filter: 'drop-shadow(2px 0 2px rgba(25, 10, 5, 0.45))' }}>
        <defs>
          <linearGradient id="laceDividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5EFE4" />
            <stop offset="40%" stopColor="#FAF7F0" />
            <stop offset="90%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#F2ECE0" />
          </linearGradient>
          <mask id="laceDividerEyeletMask">
            <rect x="0" y="0" width="22" height="600" fill="#FFFFFF" />
            {eyelets.map((pt, idx) => (
              <circle key={idx} cx={pt.x} cy={pt.y} r="1.4" fill="#000000" />
            ))}
          </mask>
        </defs>
        <path d={scallopPath} fill="url(#laceDividerGradient)" mask="url(#laceDividerEyeletMask)" />
        <line x1="2.5" y1="0" x2="2.5" y2="600" stroke="#D8CCB6" strokeWidth="0.8" strokeDasharray="2.5,2.5" opacity="0.85" />
        <path d={scallopPath} fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />
      </svg>
    </div>
  )
}

/**
 * 5. PhotoFrame Subcomponent (CR NEWS GALLERY Scalloped Frame)
 */
function PhotoFrame({ className = '' }) {
  const petals = useMemo(() => {
    const W = 288
    const H = 196
    const margin = 13
    const r = 12
    const xLeft = margin + r
    const xRight = W - margin - r
    const yTop = margin + r
    const yBot = H - margin - r
    const pts = []

    const nTop = 21
    for (let i = 0; i < nTop; i++) {
      const x = xLeft + ((xRight - xLeft) * i) / (nTop - 1)
      pts.push({ x: Number(x.toFixed(2)), y: margin })
    }
    for (const theta of [-Math.PI / 3, -Math.PI / 6]) {
      pts.push({ x: Number((xRight + r * Math.cos(theta)).toFixed(2)), y: Number((yTop + r * Math.sin(theta)).toFixed(2)) })
    }
    const nSide = 13
    for (let i = 0; i < nSide; i++) {
      const y = yTop + ((yBot - yTop) * i) / (nSide - 1)
      pts.push({ x: W - margin, y: Number(y.toFixed(2)) })
    }
    for (const theta of [Math.PI / 6, Math.PI / 3]) {
      pts.push({ x: Number((xRight + r * Math.cos(theta)).toFixed(2)), y: Number((yBot + r * Math.sin(theta)).toFixed(2)) })
    }
    for (let i = 0; i < nTop; i++) {
      const x = xRight - ((xRight - xLeft) * i) / (nTop - 1)
      pts.push({ x: Number(x.toFixed(2)), y: H - margin })
    }
    for (const theta of [(2 * Math.PI) / 3, (5 * Math.PI) / 6]) {
      pts.push({ x: Number((xLeft + r * Math.cos(theta)).toFixed(2)), y: Number((yBot + r * Math.sin(theta)).toFixed(2)) })
    }
    for (let i = 0; i < nSide; i++) {
      const y = yBot - ((yBot - yTop) * i) / (nSide - 1)
      pts.push({ x: margin, y: Number(y.toFixed(2)) })
    }
    for (const theta of [(7 * Math.PI) / 6, (4 * Math.PI) / 3]) {
      pts.push({ x: Number((xLeft + r * Math.cos(theta)).toFixed(2)), y: Number((yTop + r * Math.sin(theta)).toFixed(2)) })
    }
    return pts
  }, [])

  const W = 288
  const H = 196
  const margin = 13
  const innerW = W - 2 * margin - 12
  const innerH = H - 2 * margin - 12
  const innerX = margin + 6
  const innerY = margin + 6

  return (
    <div
      className={`absolute left-[39.2%] top-[24.2%] w-[47.6%] aspect-[288/196] z-10 ${className}`}
      style={{ filter: 'drop-shadow(0 4px 10px rgba(20, 8, 4, 0.52))' }}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="frameLaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF8" />
            <stop offset="40%" stopColor="#F9F5EC" />
            <stop offset="70%" stopColor="#F4EDE0" />
            <stop offset="100%" stopColor="#EDE3D2" />
          </linearGradient>
          <mask id="photoFrameLaceMask">
            <rect x="0" y="0" width={W} height={H} fill="#FFFFFF" />
            <rect x={innerX} y={innerY} width={innerW} height={innerH} rx="9" fill="#000000" />
            {petals.map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r="1.8" fill="#000000" />
            ))}
          </mask>
          <radialGradient id="innerWindowShadow" cx="50%" cy="50%" r="55%">
            <stop offset="75%" stopColor="#38160B" />
            <stop offset="100%" stopColor="#250C05" />
          </radialGradient>
        </defs>
        <g mask="url(#photoFrameLaceMask)">
          <rect x={margin} y={margin} width={W - 2 * margin} height={H - 2 * margin} rx="12" fill="url(#frameLaceGradient)" />
          {petals.map((pt, i) => (
            <circle key={i} cx={pt.x} cy={pt.y} r="6.2" fill="url(#frameLaceGradient)" />
          ))}
        </g>
        <rect x={innerX} y={innerY} width={innerW} height={innerH} rx="9" fill="url(#innerWindowShadow)" />
        <rect x={innerX} y={innerY} width={innerW} height={innerH} rx="9" fill="none" stroke="#D4C5AC" strokeWidth="0.9" strokeDasharray="2.5,2.5" opacity="0.85" />
        <rect x={innerX + 0.5} y={innerY + 0.5} width={innerW - 1} height={innerH - 1} rx="8.5" fill="none" stroke="rgba(0, 0, 0, 0.45)" strokeWidth="1" />
        <g transform={`translate(${W / 2}, ${H / 2})`} textAnchor="middle" dominantBaseline="middle" className="select-none pointer-events-none">
          <text x="0" y="-14" fill="#FFF2D1" fontFamily="'Playfair Display', Georgia, serif" fontWeight="bold" fontSize="19" letterSpacing="3" style={{ filter: 'drop-shadow(0 2px 4px rgba(10, 4, 2, 0.95))' }}>
            CR NEWS
          </text>
          <line x1="-58" y1="3" x2="58" y2="3" stroke="#D4AF37" strokeWidth="1.1" strokeLinecap="round" opacity="0.85" />
          <polygon points="0,-0.5 4,3 0,6.5 -4,3" fill="#FFEAA7" opacity="0.95" />
          <text x="0" y="20" fill="#E5C178" fontFamily="'Playfair Display', Georgia, serif" fontWeight="bold" fontSize="15" letterSpacing="5" style={{ filter: 'drop-shadow(0 1.5px 3px rgba(10, 4, 2, 0.9))' }}>
            GALLERY
          </text>
        </g>
      </svg>
    </div>
  )
}

/**
 * 6. AlbumBody Subcomponent (Right Cover)
 */
function AlbumBody({ isOpen = false, className = '' }) {
  return (
    <div
      className={`relative w-[73.4%] h-full rounded-r-[20px] vintage-body-surface z-10 transition-all duration-[900ms] ${className}`}
      style={{
        transformOrigin: 'right center',
        transformStyle: 'preserve-3d',
        transform: isOpen ? 'rotateY(120deg) translateZ(16px)' : 'rotateY(0deg) translateZ(0px)',
        boxShadow: isOpen ? '18px 18px 32px rgba(25, 10, 5, 0.55), inset 0 0 20px rgba(0,0,0,0.6)' : 'none',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.05, 0.64, 1)',
      }}
    >
      <div className="absolute inset-0 w-full h-full rounded-r-[20px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.03] via-transparent to-black/25" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/25 via-transparent to-black/15" />
        <div className="absolute inset-0 pointer-events-none bg-black/40 transition-opacity duration-700" style={{ opacity: isOpen ? 0.35 : 0 }} />

        {/* 1. TOP-RIGHT NAMEPLATE: CR REAL TIME NEWS CHANNEL */}
        <div className="absolute top-3 sm:top-5 right-3 sm:right-6 z-20 select-none pointer-events-none max-w-[calc(100%-34px)]">
          <div className="px-2 sm:px-4 py-1 sm:py-1.5 rounded-[4px] bg-[#1E0903]/95 border-2 border-[#E8C582] shadow-[0_4px_14px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,230,160,0.5)] flex items-center justify-center gap-1 sm:gap-2 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE394] shadow-[0_0_6px_#FFE394] shrink-0"></span>
            <span className="font-serif font-bold text-[9px] sm:text-[11.5px] md:text-[13.5px] uppercase tracking-[0.10em] sm:tracking-[0.16em] text-[#FFF0C7] drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.9)] whitespace-nowrap">
              CR REAL TIME NEWS CHANNEL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE394] shadow-[0_0_6px_#FFE394] shrink-0"></span>
          </div>
        </div>

        {/* 2. CENTRAL SCALLOPED LACE FRAME */}
        <PhotoFrame />

        {/* 3. CLICK HERE TO OPEN BUTTON */}
        <div className="absolute bottom-5 sm:bottom-7 left-[55%] sm:left-[63%] -translate-x-1/2 z-20 select-none max-w-[calc(100%-38px)]">
          <div className="group flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-[#1A0802]/92 hover:bg-[#2E1207] border border-[#E8C582]/85 shadow-[0_4px_14px_rgba(0,0,0,0.75),inset_0_1px_2px_rgba(255,230,160,0.35)] transition-all duration-300 cursor-pointer active:scale-95 anim-album-btn-pulse">
            <span className="text-[#FFE394] text-[10px] sm:text-xs font-serif shrink-0">✦</span>
            <span className="font-serif italic font-semibold text-[11px] sm:text-[13px] text-[#FFF0C7] tracking-wider whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              Click here to open
            </span>
            <span className="text-[#FFE394] text-[10px] sm:text-xs font-serif shrink-0">✦</span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 -translate-x-[1px] w-[22px] h-full pointer-events-none z-20">
        <LaceDivider />
      </div>

      <div
        className="absolute inset-0 w-full h-full rounded-l-[20px] bg-[#2E1208] border-r border-[#4A2010]/40 overflow-hidden pointer-events-none"
        style={{
          transform: 'rotateY(180deg)',
          backfaceVisibility: 'hidden',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.5) 100%), var(--vintage-leather-pattern)',
          backgroundSize: '160px 160px',
        }}
      >
        <div className="absolute inset-2 rounded-l-[18px] border border-amber-900/30 border-dashed opacity-60" />
      </div>
    </div>
  )
}

/**
 * 7. SpineHinge Subcomponent
 */
function SpineHinge({ style = {}, className = '' }) {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 w-[46px] h-[18px] pointer-events-none z-30 ${className}`}
      style={{
        ...style,
        filter: 'drop-shadow(1px 2.5px 3px rgba(25, 10, 5, 0.55))',
      }}
    >
      <svg viewBox="0 0 80 28" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="ironHingeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A4A52" />
            <stop offset="40%" stopColor="#2D2D34" />
            <stop offset="70%" stopColor="#1E1E22" />
            <stop offset="100%" stopColor="#121215" />
          </linearGradient>
          <radialGradient id="brassRivetGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#E6C875" />
            <stop offset="50%" stopColor="#A88035" />
            <stop offset="100%" stopColor="#4D350E" />
          </radialGradient>
        </defs>
        <path d="M 36 6 Q 26 8, 18 4 C 14 3, 10 7, 6 10 C 2 13, 2 15, 6 18 C 10 21, 14 25, 18 24 Q 26 20, 36 22 Z" fill="url(#ironHingeGrad)" stroke="#121215" strokeWidth="0.8" />
        <path d="M 44 6 Q 54 8, 62 4 C 66 3, 70 7, 74 10 C 78 13, 78 15, 74 18 C 70 21, 66 25, 62 24 Q 54 20, 44 22 Z" fill="url(#ironHingeGrad)" stroke="#121215" strokeWidth="0.8" />
        <rect x="36" y="3" width="8" height="22" rx="3" fill="url(#ironHingeGrad)" stroke="#0E0E12" strokeWidth="1" />
        <line x1="39" y1="5" x2="39" y2="23" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
        <circle cx="16" cy="14" r="2.2" fill="url(#brassRivetGrad)" stroke="#1C1408" strokeWidth="0.5" />
        <circle cx="28" cy="14" r="2" fill="url(#brassRivetGrad)" stroke="#1C1408" strokeWidth="0.5" />
        <circle cx="64" cy="14" r="2.2" fill="url(#brassRivetGrad)" stroke="#1C1408" strokeWidth="0.5" />
        <circle cx="52" cy="14" r="2" fill="url(#brassRivetGrad)" stroke="#1C1408" strokeWidth="0.5" />
      </svg>
    </div>
  )
}

/**
 * 8. PolaroidCard Subcomponent
 */
function PolaroidCard({
  _id,
  title = 'News Category',
  photo = null,
  style = {},
  className = '',
}) {
  return (
    <div
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        ...style,
        filter: 'drop-shadow(1.5px 3.5px 7px rgba(35, 16, 6, 0.38))',
      }}
    >
      <div
        className="w-full h-full bg-[#FAF5EB] rounded-[3px] p-1.5 sm:p-2 pb-1.5 sm:pb-2 flex flex-col justify-between border border-[#DFCEB3] relative overflow-hidden"
        style={{
          boxShadow: 'inset 0 0 8px rgba(160, 110, 60, 0.12), 0 1px 2px rgba(0,0,0,0.1)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(215,190,150,0.25) 100%)',
          }}
        />
        <div className="w-full flex-1 min-h-0 bg-[#120B06] rounded-[2px] overflow-hidden relative shadow-[inset_0_1.5px_4px_rgba(0,0,0,0.8)] z-10 shrink-1">
          <img
            src={photo || DEFAULT_VINTAGE_PLACEHOLDER}
            alt={title}
            className="w-full h-full object-cover filter sepia-[0.22] contrast-[1.04]"
          />
        </div>
        <div className="h-[38px] sm:h-[48px] md:h-[52px] pt-0.5 sm:pt-1.5 px-0.5 text-center relative z-10 flex items-center justify-center shrink-0">
          <h4
            className="font-serif italic font-bold text-[#3B1E0C] text-[10px] sm:text-[10.5px] md:text-[11.5px] leading-[1.18] tracking-tight drop-shadow-2xs text-center w-full break-words select-none"
            title={title}
          >
            {title}
          </h4>
        </div>
      </div>
    </div>
  )
}

/**
 * 9. AlbumInside Subcomponent (Interactive Parchment Spread)
 */
const MOBILE_SLOTS = [
  { left: '4.5%', top: '3.5%', width: '43.5%', height: '29.0%' },
  { left: '52.0%', top: '3.5%', width: '43.5%', height: '29.0%' },
  { left: '4.5%', top: '35.5%', width: '43.5%', height: '29.0%' },
  { left: '52.0%', top: '35.5%', width: '43.5%', height: '29.0%' },
  { left: '4.5%', top: '67.5%', width: '43.5%', height: '29.0%' },
  { left: '52.0%', top: '67.5%', width: '43.5%', height: '29.0%' },
]

const DESKTOP_SLOTS = [
  { left: '3.0%', top: '5.5%', width: '13.6%', height: '41.5%' },
  { left: '18.2%', top: '5.5%', width: '13.6%', height: '41.5%' },
  { left: '33.4%', top: '5.5%', width: '13.6%', height: '41.5%' },
  { left: '3.0%', top: '52.0%', width: '13.6%', height: '41.5%' },
  { left: '18.2%', top: '52.0%', width: '13.6%', height: '41.5%' },
  { left: '33.4%', top: '52.0%', width: '13.6%', height: '41.5%' },
  { left: '53.0%', top: '5.5%', width: '13.6%', height: '41.5%' },
  { left: '68.2%', top: '5.5%', width: '13.6%', height: '41.5%' },
  { left: '83.4%', top: '5.5%', width: '13.6%', height: '41.5%' },
  { left: '53.0%', top: '52.0%', width: '13.6%', height: '41.5%' },
  { left: '68.2%', top: '52.0%', width: '13.6%', height: '41.5%' },
  { left: '83.4%', top: '52.0%', width: '13.6%', height: '41.5%' },
]

const DESKTOP_HALF_SLOTS = [
  { left: '6.0%', top: '5.5%', width: '27.2%', height: '41.5%' },
  { left: '36.4%', top: '5.5%', width: '27.2%', height: '41.5%' },
  { left: '66.8%', top: '5.5%', width: '27.2%', height: '41.5%' },
  { left: '6.0%', top: '52.0%', width: '27.2%', height: '41.5%' },
  { left: '36.4%', top: '52.0%', width: '27.2%', height: '41.5%' },
  { left: '66.8%', top: '52.0%', width: '27.2%', height: '41.5%' },
]

function AlbumInside({
  onClose,
  isVisible = true,
  initialPage = 1,
  onPageChange,
  isMobile = false,
}) {
  const totalPages = isMobile ? 10 : 5
  const cardsPerPage = isMobile ? 6 : 12

  const [currentPage, setCurrentPage] = useState(() => {
    return Math.max(1, Math.min(totalPages, initialPage || 1))
  })
  const [flipState, setFlipState] = useState(null)

  useEffect(() => {
    if (currentPage > totalPages) {
      const clamped = totalPages
      setCurrentPage(clamped)
      if (onPageChange) onPageChange(clamped)
    }
  }, [totalPages])

  useEffect(() => {
    if (initialPage && initialPage !== currentPage && !flipState) {
      const valid = Math.max(1, Math.min(totalPages, initialPage))
      setCurrentPage(valid)
    }
  }, [initialPage, totalPages])

  const getCardsForPage = (page) => {
    const p = Math.max(1, Math.min(totalPages, page))
    const start = (p - 1) * cardsPerPage
    return NEWS_CATEGORIES.slice(start, start + cardsPerPage)
  }

  const currentCards = getCardsForPage(currentPage)

  const handleNextPage = (e) => {
    e.stopPropagation()
    if (currentPage < totalPages && !flipState) {
      const nextPage = currentPage + 1
      setFlipState({
        direction: 'next',
        fromPage: currentPage,
        toPage: nextPage,
      })
      setTimeout(() => {
        setCurrentPage(nextPage)
        if (onPageChange) onPageChange(nextPage)
        setFlipState(null)
      }, 680)
    }
  }

  const handlePrevPage = (e) => {
    e.stopPropagation()
    if (currentPage > 1 && !flipState) {
      const prevPage = currentPage - 1
      setFlipState({
        direction: 'prev',
        fromPage: currentPage,
        toPage: prevPage,
      })
      setTimeout(() => {
        setCurrentPage(prevPage)
        if (onPageChange) onPageChange(prevPage)
        setFlipState(null)
      }, 680)
    }
  }

  const renderDesktopHalfCards = (cardList = []) => {
    return cardList.map((card, idx) => {
      const slot = DESKTOP_HALF_SLOTS[idx] || DESKTOP_HALF_SLOTS[0]
      return (
        <PolaroidCard
          key={`desktop-half-${card.id}`}
          id={card.id}
          title={card.title}
          style={{
            left: slot.left,
            top: slot.top,
            width: slot.width,
            height: slot.height,
          }}
        />
      )
    })
  }

  const renderMobileCards = (cardList = [], animated = false) => {
    return cardList.map((card, idx) => {
      const slot = MOBILE_SLOTS[idx] || MOBILE_SLOTS[0]
      const col = idx % 2
      const row = Math.floor(idx / 2)

      let animClass = ''
      let animDelay = '0ms'

      if (animated) {
        animClass = col === 0 ? 'animate-card-left' : 'animate-card-right'
        animDelay = `${row * 120 + 40}ms`
      }

      return (
        <PolaroidCard
          key={`mob-${card.id}`}
          id={card.id}
          title={card.title}
          className={animClass}
          style={{
            left: slot.left,
            top: slot.top,
            width: slot.width,
            height: slot.height,
            animationDelay: animDelay,
          }}
        />
      )
    })
  }

  const isBusy = !!flipState

  return (
    <div
      className={`relative w-full h-full rounded-[16px] sm:rounded-[18px] pt-2.5 sm:pt-3 px-2 sm:px-3 pb-11 sm:pb-12 bg-[#341409] vintage-leather-surface shadow-[0_28px_60px_rgba(25,10,4,0.55),inset_0_2px_4px_rgba(255,255,255,0.08),inset_0_-2px_6px_rgba(0,0,0,0.6)] transition-all duration-700 select-none ${
        isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="absolute top-2 sm:top-2.5 right-2.5 sm:right-5 z-40 flex items-center">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            if (onClose) onClose()
          }}
          className="group flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#2A0E06]/95 hover:bg-[#4E1E0F] text-[#FAF5EC] text-[10.5px] sm:text-xs font-serif tracking-wider shadow-lg hover:shadow-xl transition-all border border-amber-900/60 cursor-pointer active:scale-95 backdrop-blur-xs"
          title="Close Album"
        >
          <span className="text-amber-300 font-bold text-xs">✕</span>
          <span className="font-medium">Close Album</span>
        </button>
      </div>

      <div
        className="relative w-full h-full rounded-[10px] sm:rounded-[12px] overflow-hidden flex shadow-[inset_0_0_24px_rgba(60,30,10,0.32)] preserve-3d"
        style={{ perspective: '2400px' }}
      >
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundColor: '#EAD9BD',
            backgroundImage: `
              radial-gradient(ellipse at 25% 45%, rgba(255, 248, 235, 0.75) 0%, rgba(225, 203, 170, 0.38) 60%, rgba(165, 130, 85, 0.45) 100%),
              radial-gradient(ellipse at 75% 45%, rgba(255, 248, 235, 0.75) 0%, rgba(225, 203, 170, 0.38) 60%, rgba(165, 130, 85, 0.45) 100%),
              linear-gradient(to right, rgba(140, 100, 60, 0.28) 0%, transparent 8%, transparent 92%, rgba(140, 100, 60, 0.28) 100%),
              linear-gradient(to bottom, rgba(140, 100, 60, 0.22) 0%, transparent 6%, transparent 94%, rgba(140, 100, 60, 0.32) 100%)
            `,
          }}
        />

        <div className="absolute top-0 right-0 w-6 sm:w-7 h-6 sm:h-7 pointer-events-none z-20">
          <svg viewBox="0 0 28 28" className="w-full h-full opacity-60">
            <polygon points="28,0 0,0 28,28" fill="#BFA37C" />
            <line x1="0" y1="0" x2="28" y2="28" stroke="#8C6A43" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Desktop-only Spine Crease and Hinges */}
        <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[36px] pointer-events-none z-20">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-[#3B190B]/55" />
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#2D1308]/25 to-transparent" />
        </div>
        <div className="hidden sm:block">
          <SpineHinge style={{ top: '6.5%' }} />
          <SpineHinge style={{ top: '78.0%' }} />
        </div>

        {/* 1. Static Spread */}
        {!flipState && (
          <div key={`page-${currentPage}`} className="w-full h-full relative">
            {isMobile ? (
              renderMobileCards(currentCards, true)
            ) : (
              currentCards.map((card, index) => {
                const slot = DESKTOP_SLOTS[index] || DESKTOP_SLOTS[0]
                const col = index % 3

                let animClass = ''
                let animDelay = '0ms'

                if (col === 1) {
                  animClass = 'animate-card-top'
                  animDelay = index < 6 ? '40ms' : '80ms'
                } else if (col === 0) {
                  animClass = 'animate-card-left'
                  animDelay = index < 6 ? '240ms' : '280ms'
                } else {
                  animClass = 'animate-card-right'
                  animDelay = index < 6 ? '240ms' : '280ms'
                }

                return (
                  <PolaroidCard
                    key={`${currentPage}-${card.id}`}
                    id={card.id}
                    title={card.title}
                    className={animClass}
                    style={{
                      left: slot.left,
                      top: slot.top,
                      width: slot.width,
                      height: slot.height,
                      animationDelay: animDelay,
                    }}
                  />
                )
              })
            )}
          </div>
        )}

        {/* 2. Mobile 3D Page Flip */}
        {flipState && isMobile && (
          <div className="absolute inset-0 w-full h-full preserve-3d pointer-events-none">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {renderMobileCards(getCardsForPage(flipState.toPage), false)}
            </div>

            {flipState.direction === 'next' && (
              <div className="absolute top-0 right-0 w-full h-full preserve-3d z-30 animate-page-turn-next" style={{ transformOrigin: 'left center' }}>
                <div
                  className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-[10px]"
                  style={{
                    backgroundColor: '#EAD9BD',
                    backgroundImage: `
                      radial-gradient(ellipse at 50% 50%, rgba(255, 248, 235, 0.7) 0%, rgba(225, 203, 170, 0.35) 60%, rgba(165, 130, 85, 0.45) 100%),
                      linear-gradient(to right, rgba(140, 100, 60, 0.28) 0%, transparent 12%, rgba(140, 100, 60, 0.22) 100%)
                    `,
                  }}
                >
                  {renderMobileCards(getCardsForPage(flipState.fromPage), false)}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none animate-page-shade-front" />
                </div>
                <div
                  className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-[10px]"
                  style={{
                    transform: 'rotateY(180deg)',
                    backgroundColor: '#EAD9BD',
                    backgroundImage: `
                      radial-gradient(ellipse at 50% 50%, rgba(255, 248, 235, 0.7) 0%, rgba(225, 203, 170, 0.35) 60%, rgba(165, 130, 85, 0.45) 100%),
                      linear-gradient(to left, rgba(140, 100, 60, 0.28) 0%, transparent 12%, rgba(140, 100, 60, 0.22) 100%)
                    `,
                  }}
                >
                  {renderMobileCards(getCardsForPage(flipState.toPage), false)}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-black/10 to-transparent pointer-events-none animate-page-shade-back" />
                </div>
              </div>
            )}

            {flipState.direction === 'prev' && (
              <div className="absolute top-0 left-0 w-full h-full preserve-3d z-30 animate-page-turn-prev" style={{ transformOrigin: 'right center' }}>
                <div
                  className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-[10px]"
                  style={{
                    backgroundColor: '#EAD9BD',
                    backgroundImage: `
                      radial-gradient(ellipse at 50% 50%, rgba(255, 248, 235, 0.7) 0%, rgba(225, 203, 170, 0.35) 60%, rgba(165, 130, 85, 0.45) 100%),
                      linear-gradient(to left, rgba(140, 100, 60, 0.28) 0%, transparent 12%, rgba(140, 100, 60, 0.22) 100%)
                    `,
                  }}
                >
                  {renderMobileCards(getCardsForPage(flipState.fromPage), false)}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-black/10 to-transparent pointer-events-none animate-page-shade-front" />
                </div>
                <div
                  className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-[10px]"
                  style={{
                    transform: 'rotateY(-180deg)',
                    backgroundColor: '#EAD9BD',
                    backgroundImage: `
                      radial-gradient(ellipse at 50% 50%, rgba(255, 248, 235, 0.7) 0%, rgba(225, 203, 170, 0.35) 60%, rgba(165, 130, 85, 0.45) 100%),
                      linear-gradient(to right, rgba(140, 100, 60, 0.28) 0%, transparent 12%, rgba(140, 100, 60, 0.22) 100%)
                    `,
                  }}
                >
                  {renderMobileCards(getCardsForPage(flipState.toPage), false)}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none animate-page-shade-back" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. Desktop 3D Spread Flip */}
        {flipState && !isMobile && (
          <div className="absolute inset-0 w-full h-full preserve-3d pointer-events-none">
            <div className="absolute inset-0 w-full h-full flex">
              <div className="relative w-1/2 h-full overflow-hidden">
                {renderDesktopHalfCards(
                  flipState.direction === 'next'
                    ? getCardsForPage(flipState.fromPage).slice(0, 6)
                    : getCardsForPage(flipState.toPage).slice(0, 6)
                )}
              </div>
              <div className="relative w-1/2 h-full overflow-hidden">
                {renderDesktopHalfCards(
                  flipState.direction === 'next'
                    ? getCardsForPage(flipState.toPage).slice(6, 12)
                    : getCardsForPage(flipState.fromPage).slice(6, 12)
                )}
              </div>
            </div>

            {flipState.direction === 'next' && (
              <div className="absolute top-0 right-0 w-1/2 h-full preserve-3d z-30 animate-page-turn-next" style={{ transformOrigin: 'left center' }}>
                <div
                  className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-r-[12px]"
                  style={{
                    backgroundColor: '#EAD9BD',
                    backgroundImage: `
                      radial-gradient(ellipse at 50% 50%, rgba(255, 248, 235, 0.7) 0%, rgba(225, 203, 170, 0.35) 60%, rgba(165, 130, 85, 0.45) 100%),
                      linear-gradient(to right, rgba(140, 100, 60, 0.28) 0%, transparent 12%, rgba(140, 100, 60, 0.22) 100%)
                    `,
                  }}
                >
                  {renderDesktopHalfCards(getCardsForPage(flipState.fromPage).slice(6, 12))}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none animate-page-shade-front" />
                </div>
                <div
                  className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-l-[12px]"
                  style={{
                    transform: 'rotateY(180deg)',
                    backgroundColor: '#EAD9BD',
                    backgroundImage: `
                      radial-gradient(ellipse at 50% 50%, rgba(255, 248, 235, 0.7) 0%, rgba(225, 203, 170, 0.35) 60%, rgba(165, 130, 85, 0.45) 100%),
                      linear-gradient(to left, rgba(140, 100, 60, 0.28) 0%, transparent 12%, rgba(140, 100, 60, 0.22) 100%)
                    `,
                  }}
                >
                  {renderDesktopHalfCards(getCardsForPage(flipState.toPage).slice(0, 6))}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-black/10 to-transparent pointer-events-none animate-page-shade-back" />
                </div>
              </div>
            )}

            {flipState.direction === 'prev' && (
              <div className="absolute top-0 left-0 w-1/2 h-full preserve-3d z-30 animate-page-turn-prev" style={{ transformOrigin: 'right center' }}>
                <div
                  className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-l-[12px]"
                  style={{
                    backgroundColor: '#EAD9BD',
                    backgroundImage: `
                      radial-gradient(ellipse at 50% 50%, rgba(255, 248, 235, 0.7) 0%, rgba(225, 203, 170, 0.35) 60%, rgba(165, 130, 85, 0.45) 100%),
                      linear-gradient(to left, rgba(140, 100, 60, 0.28) 0%, transparent 12%, rgba(140, 100, 60, 0.22) 100%)
                    `,
                  }}
                >
                  {renderDesktopHalfCards(getCardsForPage(flipState.fromPage).slice(0, 6))}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-black/10 to-transparent pointer-events-none animate-page-shade-front" />
                </div>
                <div
                  className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-r-[12px]"
                  style={{
                    transform: 'rotateY(-180deg)',
                    backgroundColor: '#EAD9BD',
                    backgroundImage: `
                      radial-gradient(ellipse at 50% 50%, rgba(255, 248, 235, 0.7) 0%, rgba(225, 203, 170, 0.35) 60%, rgba(165, 130, 85, 0.45) 100%),
                      linear-gradient(to right, rgba(140, 100, 60, 0.28) 0%, transparent 12%, rgba(140, 100, 60, 0.22) 100%)
                    `,
                  }}
                >
                  {renderDesktopHalfCards(getCardsForPage(flipState.toPage).slice(6, 12))}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none animate-page-shade-back" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-1.5 sm:bottom-2 left-2.5 sm:left-6 z-40">
        <button
          type="button"
          onClick={handlePrevPage}
          disabled={currentPage === 1 || isBusy}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-serif text-[10.5px] sm:text-xs font-semibold tracking-wider transition-all border shadow-md ${
            currentPage === 1 || isBusy
              ? 'opacity-30 cursor-not-allowed text-[#BFA37C] border-amber-900/30 bg-[#230C05]'
              : 'bg-[#2A0E06]/95 hover:bg-[#4E1E0F] text-[#FAF5EC] hover:text-amber-300 border-amber-900/60 cursor-pointer active:scale-95'
          }`}
          title="Previous Page"
        >
          <span className="text-amber-400 font-bold">←</span>
          <span>Previous</span>
        </button>
      </div>

      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center">
        <span className="font-serif italic font-bold text-amber-200/90 text-[11px] sm:text-sm tracking-widest drop-shadow whitespace-nowrap">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <div className="absolute bottom-1.5 sm:bottom-2 right-2.5 sm:right-6 z-40">
        <button
          type="button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages || isBusy}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-serif text-[10.5px] sm:text-xs font-semibold tracking-wider transition-all border shadow-md ${
            currentPage === totalPages || isBusy
              ? 'opacity-30 cursor-not-allowed text-[#BFA37C] border-amber-900/30 bg-[#230C05]'
              : 'bg-[#2A0E06]/95 hover:bg-[#4E1E0F] text-[#FAF5EC] hover:text-amber-300 border-amber-900/60 cursor-pointer active:scale-95'
          }`}
          title="Next Page"
        >
          <span>Next</span>
          <span className="text-amber-400 font-bold">→</span>
        </button>
      </div>
    </div>
  )
}

/**
 * 10. AlbumCover Subcomponent (Master 3D Cover with State Engine)
 */
function AlbumCover({ className = '' }) {
  const isMobile = useIsMobile()
  const [savedState] = useState(getSavedAlbumState)

  const [animState, setAnimState] = useState(savedState.isOpen ? 'open' : 'closed')
  const [isLeftOpen, setIsLeftOpen] = useState(savedState.isOpen)
  const [isRightOpen, setIsRightOpen] = useState(savedState.isOpen)
  const [coversFading, setCoversFading] = useState(savedState.isOpen)
  const [currentPage, setCurrentPage] = useState(savedState.page)

  const isClosed = animState === 'closed'
  const isOpen = animState === 'open'
  const isUntying = animState !== 'closed' && animState !== 'tying'
  const isAnimating = animState !== 'closed' && animState !== 'open'

  const handleOpen = () => {
    if (!isClosed || isAnimating) return

    try {
      localStorage.setItem('album_open', 'true')
      localStorage.setItem('album_page', String(currentPage))
      const url = new URL(window.location.href)
      url.searchParams.set('page', String(currentPage))
      window.history.replaceState(null, '', url.toString())
    } catch {}

    setAnimState('untying')

    setTimeout(() => {
      setAnimState('opening')
      setIsLeftOpen(true)

      setTimeout(() => {
        setIsRightOpen(true)

        setTimeout(() => {
          setCoversFading(true)

          setTimeout(() => {
            setAnimState('open')
          }, 400)
        }, 400)
      }, 250)
    }, 700)
  }

  const handleClose = () => {
    if (animState !== 'open') return

    try {
      localStorage.setItem('album_open', 'false')
      localStorage.setItem('album_page', '1')
      const url = new URL(window.location.href)
      url.searchParams.delete('page')
      window.history.replaceState(null, '', url.toString())
    } catch {}

    setAnimState('closing')
    setCoversFading(false)

    setTimeout(() => {
      setIsRightOpen(false)

      setTimeout(() => {
        setIsLeftOpen(false)

        setTimeout(() => {
          setAnimState('tying')

          setTimeout(() => {
            setAnimState('closed')
            setCurrentPage(1)
          }, 700)
        }, 700)
      }, 200)
    }, 100)
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    try {
      localStorage.setItem('album_open', 'true')
      localStorage.setItem('album_page', String(newPage))
      const url = new URL(window.location.href)
      url.searchParams.set('page', String(newPage))
      window.history.replaceState(null, '', url.toString())
    } catch {}
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (isClosed) handleOpen()
      else if (isOpen) handleClose()
    }
  }

  const isWide = animState === 'opening' || animState === 'open' || (animState === 'closing' && coversFading)

  return (
    <div
      className={`relative w-full select-none transition-all duration-[800ms] ${className}`}
      style={{
        maxWidth: isWide
          ? (isMobile ? 'min(420px, 94vw)' : 'min(1160px, 150vh)')
          : (isMobile ? 'min(340px, 88vw)' : 'min(650px, 84vh)'),
        aspectRatio: isWide
          ? (isMobile ? '1 / 1.44' : '1.80 / 1')
          : '1 / 1',
        perspective: '1600px',
        perspectiveOrigin: 'center center',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.05, 0.64, 1)',
      }}
    >
      {/* 1. Inside Album */}
      <AlbumInside
        onClose={handleClose}
        isVisible={isLeftOpen || isRightOpen || isOpen}
        initialPage={savedState.page}
        onPageChange={handlePageChange}
        isMobile={isMobile}
      />

      {/* 2. 3D Dual-Cover Container */}
      {!isOpen && (
        <div
          role="button"
          tabIndex={0}
          onClick={isClosed ? handleOpen : undefined}
          onKeyDown={handleKeyDown}
          aria-label={isClosed ? 'Open Vintage Leather Photo Album' : 'Vintage Leather Photo Album'}
          className={`absolute inset-0 w-full h-full flex rounded-[20px] vintage-album-shadow transition-all duration-500 focus:outline-none ${
            isClosed
              ? 'cursor-pointer hover:scale-[1.01] hover:brightness-[1.02] active:scale-[0.99] focus-visible:ring-4 focus-visible:ring-amber-700/40'
              : 'pointer-events-none'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            opacity: coversFading ? 0 : 1,
            transition: 'opacity 0.45s ease-out, transform 0.4s ease',
          }}
        >
          <AlbumBinding isOpen={isLeftOpen} isUntying={isUntying} />
          <AlbumBody isOpen={isRightOpen} />

          <div
            className="absolute inset-0 rounded-[20px] pointer-events-none ring-1 ring-inset ring-white/10 transition-opacity duration-500"
            style={{ opacity: isLeftOpen || isRightOpen ? 0 : 1 }}
          />
          <div
            className="absolute inset-0 rounded-[20px] pointer-events-none shadow-[inset_0_2px_4px_rgba(255,255,255,0.08),inset_0_-2px_6px_rgba(0,0,0,0.5)] transition-opacity duration-500"
            style={{ opacity: isLeftOpen || isRightOpen ? 0 : 1 }}
          />
        </div>
      )}
    </div>
  )
}

/**
 * ============================================================================
 * 11. MAIN GALLERY COMPONENT (Default Export)
 * Completely self-contained with embedded CSS and all subcomponents
 * ============================================================================
 */
export default function Gallery() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between pt-12 pb-5 sm:py-6 md:py-8 px-4 sm:px-8 bg-white overflow-x-hidden anim-gallery-page">
      {/* Embedded style block - No separate CSS file required */}
      <style>{ALBUM_STYLES}</style>

      {/* Header */}
      <header className="w-full max-w-3xl mx-auto text-center pt-1 sm:pt-2 pb-2 sm:pb-3 select-none">
        {/* Category Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-2 shadow-xs anim-gallery-badge">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>CR REAL TIME NEWS ARCHIVES • 60 CATEGORIES</span>
        </div>

        {/* Title */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight drop-shadow-xs anim-gallery-title">
          Gallery
        </h1>

        {/* Red Accent Divider */}
        <div className="w-16 h-1 bg-red-600 rounded-full mx-auto my-2 sm:my-2.5 shadow-xs anim-gallery-line" />

        {/* Subtitle */}
        <p className="font-serif italic text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed anim-gallery-desc">
          Explore 60 master news categories preserved across our interactive vintage leather-bound archives. Click to open and flip through editorial beats.
        </p>
      </header>

      {/* Main Album Presentation Container */}
      <main className="relative w-full flex-1 flex items-center justify-center py-4 sm:py-6 anim-gallery-album">
        <AlbumCover />
      </main>
    </div>
  )
}

export { Gallery, Gallery as GalleryPage };
