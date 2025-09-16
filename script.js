document.addEventListener('DOMContentLoaded', () => {
    const inputCode = document.getElementById('inputCode');
    const outputCode = document.getElementById('outputCode');
    const deobfuscateBtn = document.getElementById('deobfuscateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const clearInputBtn = document.getElementById('clearInputBtn');
    const loader = document.getElementById('loader');
    const statusMessage = document.getElementById('statusMessage');
    const statsContainer = document.getElementById('statsContainer');
    
    // Stats elements
    const lineCount = document.getElementById('lineCount');
    const tableCount = document.getElementById('tableCount');
    const varCount = document.getElementById('varCount');
