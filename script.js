const navLinksText = ["About", "Education", "Skills", "Projects", "Contact"];
// Function to generate navigation links
function generateNavLinks(linkTexts, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
        targetElement.innerHTML = linkTexts.map((text) => {
            return `<li class="text-emerald-700 hover:text-emerald-900 transition-all duration-300 ease-in-out hover:translate-x-1">
                        <a class="flex items-center gap-1" href="#${text.toLowerCase()}">
                            ${text}
                            <i class="fa-solid fa-arrow-right -rotate-45 hover:rotate-90 transition-all duration-300"></i>
                        </a>
                    </li>
                    `;
        }).join('');
    } else {
        console.error(`Element with ID '${targetElementId}' not found!`);
    }
}
generateNavLinks(navLinksText, 'navLinks-1');
generateNavLinks(navLinksText, 'navLinks-2');

