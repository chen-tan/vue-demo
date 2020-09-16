<template>
    <div class="date-picker">
        <div class="picker-input">
            <span class="input-prefix">
                <i class="iconfont">&#xe75b;</i>
            </span>
            <input type="text">
        </div>
        <div class="picker-panel">
            <div class="picker-arrow" />
            <div class="picker-body">
                <div class="picker-header">
                    <span class="picker-btn iconfont icon-prev-year">&#xe714;</span>
                    <span class="picker-btn iconfont icon-next-month">&#xe712;</span>
                    <span class="picker-date">
                        2020年9月
                    </span>
                    <span class="picker-btn iconfont icon-prev-month">&#xe718;</span>
                    <span class="picker-btn iconfont icon-next-year">&#xe713;</span>
                </div>
                <div class="picker-content">
                    <div class="picker-weeks">
                        <div
                         v-for="week in ['日','一','二','三','四','五','六']" 
                         :key="week"
                         class="week"
                        >{{ week }}</div>
                    </div>
                    <div class="picker-days">
                        <div
                         v-for="day in 42"
                         :key="day"
                        >{{ day }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    @import './assets/font.css';
    @import './assets/datePicker.css';
</style>