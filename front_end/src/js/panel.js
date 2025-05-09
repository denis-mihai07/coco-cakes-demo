const panel = document.getElementById("menu_panel");
const overlay = document.getElementById("overlay");
const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close_button");
const content = document.getElementById("panel_content");
const phoneNumber = document.getElementById("panel_phone_clipboard");

let isPanelOpen = false;
let isAnimating = false;

menuButton.addEventListener('click', () => {
    if(isAnimating || isPanelOpen) return;

    isAnimating = true;
    overlay.classList.add("visible");
    
    setTimeout(() => {
        panel.classList.add("open");
        content.classList.add("visible2");
        closeButton.classList.add("visible3");
        isAnimating = false;
        isPanelOpen = true;
    }, 600); 
});

function closePanel() {
    if(isAnimating || !isPanelOpen) return;
    isAnimating = true;
    content.classList.remove("visible2");
    closeButton.classList.remove("visible3");
    setTimeout(() => {
        panel.classList.remove("open");
    }, 500);
    setTimeout(() => {
        overlay.classList.remove("visible");
        isAnimating = false;
        isPanelOpen = false;
    }, 800); 
}

overlay.addEventListener('click', closePanel);
closeButton.addEventListener('click', closePanel);

let isTooltipVisible = false;

phoneNumber.addEventListener('click', (event) => {
    if(isTooltipVisible) return;
    isTooltipVisible = true;
    navigator.clipboard.writeText(phoneNumber.innerText);

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = "Copied to Clipboard";

    tooltip.style.left = event.clientX + 10 + 'px';
    tooltip.style.top = event.clientY + 10 + 'px';
    document.body.appendChild(tooltip);

    window.getComputedStyle(tooltip).opacity;
    tooltip.style.opacity = 1;

    setTimeout(() => {
        tooltip.style.opacity = 0;
        setTimeout(() => {
            tooltip.remove();
            isTooltipVisible = false;
        }, 300);
    }, 2000);


})



