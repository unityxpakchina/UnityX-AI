// Sample translation dictionary (replace with real API later)
const translations = {
    ur: {
        zh: {
            "سلام": "你好",
            "آپ کیسے ہیں؟": "你好吗？",
            "شکریہ": "谢谢"
        },
        en: {
            "سلام": "Hello",
            "آپ کیسے ہیں؟": "How are you?",
            "شکریہ": "Thank you"
        }
    },
    zh: {
        ur: {
            "你好": "سلام",
            "你好吗？": "آپ کیسے ہیں؟",
            "谢谢": "شکریہ"
        }
    }
};

function translateText(text, from, to) {
    // Simple word-by-word translation
    const words = text.split(' ');
    return words.map(word => {
        return translations[from][to][word] || word;
    }).join(' ');
}

document.getElementById('translateBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;
    
    const translated = translateText(inputText, sourceLang, targetLang);
    document.getElementById('outputText').innerText = translated;
});

// Language swap
document.getElementById('swapLangs').addEventListener('click', () => {
    const source = document.getElementById('sourceLang');
    const target = document.getElementById('targetLang');
    [source.value, target.value] = [target.value, source.value];
});
