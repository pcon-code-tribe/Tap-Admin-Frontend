const labels = document.querySelectorAll('.form_control label');
console.log(labels); 

labels.forEach((label) => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx) => `<span style="transition-delay:${idx*60}ms ;">${letter}</span>`)
    .join('')

    console.log(label.innerHTML);
})
