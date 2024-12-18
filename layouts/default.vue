<template>
    <n-space vertical size="large">
      <n-layout>
        <!-- Navbar -->
        <n-layout-header>
        <LayoutCompsHeader />
        </n-layout-header>
  
        <!-- Page Content -->
        <div class="page-body">
          <slot></slot>
        </div>
       
        <!-- Footer -->
        <n-layout-footer>
          <LayoutCompsFooter />
        </n-layout-footer>
      </n-layout>
    </n-space>
  </template>
  
  <script setup>
  import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'
  
 
  </script>
  