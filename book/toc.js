// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">介绍</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="cs106l/about.html"><strong aria-hidden="true">1.</strong> cs106l</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="cs106l/lesson1.html"><strong aria-hidden="true">1.1.</strong> lesson1</a></li><li class="chapter-item expanded "><a href="cs106l/lesson2.html"><strong aria-hidden="true">1.2.</strong> lesson2</a></li></ol></li><li class="chapter-item expanded "><a href="6.031/about.html"><strong aria-hidden="true">2.</strong> 6.031</a></li><li class="chapter-item expanded "><a href="65480/about.html"><strong aria-hidden="true">3.</strong> 65480</a></li><li class="chapter-item expanded "><a href="6s081/about.html"><strong aria-hidden="true">4.</strong> 6s081</a></li><li class="chapter-item expanded "><a href="algs4/about.html"><strong aria-hidden="true">5.</strong> algs4</a></li><li class="chapter-item expanded "><a href="build_a_computer/about.html"><strong aria-hidden="true">6.</strong> build_a_computer</a></li><li class="chapter-item expanded "><a href="cmu15445/about.html"><strong aria-hidden="true">7.</strong> cmu15445</a></li><li class="chapter-item expanded "><a href="cs149/about.html"><strong aria-hidden="true">8.</strong> cs149</a></li><li class="chapter-item expanded "><a href="cs61a/about.html"><strong aria-hidden="true">9.</strong> cs61a</a></li><li class="chapter-item expanded "><a href="cs70/about.html"><strong aria-hidden="true">10.</strong> cs70</a></li><li class="chapter-item expanded "><a href="dlsystem/about.html"><strong aria-hidden="true">11.</strong> dlsystem</a></li><li class="chapter-item expanded "><a href="full_stack/about.html"><strong aria-hidden="true">12.</strong> full_stack</a></li><li class="chapter-item expanded "><a href="network/about.html"><strong aria-hidden="true">13.</strong> network</a></li><li class="chapter-item expanded "><a href="nju_os/about.html"><strong aria-hidden="true">14.</strong> nju_os</a></li><li class="chapter-item expanded "><a href="nju_pa/about.html"><strong aria-hidden="true">15.</strong> nju_pa</a></li><li class="chapter-item expanded "><a href="riscv_os/about.html"><strong aria-hidden="true">16.</strong> riscv_os</a></li><li class="chapter-item expanded "><a href="talent_plant_tinykv/about.html"><strong aria-hidden="true">17.</strong> talent_plant_tinykv</a></li><li class="chapter-item expanded "><a href="tinyml/about.html"><strong aria-hidden="true">18.</strong> tinyml</a></li><li class="chapter-item expanded "><a href="cs224n/about.html"><strong aria-hidden="true">19.</strong> CS224N</a></li><li class="chapter-item expanded "><a href="ai_infra/about.html"><strong aria-hidden="true">20.</strong> AI_Infra</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ai_infra/ai_model_parallel.html"><strong aria-hidden="true">20.1.</strong> 大模型并行综述</a></li><li class="chapter-item expanded "><a href="ai_infra/ai_infra_roadmap.html"><strong aria-hidden="true">20.2.</strong> 大模型工程师路线图</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="notes.html">使用手册</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="about.html">About Me</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
