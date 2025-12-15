document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('pre').forEach(pre => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.innerHTML = '📋';
        copyButton.title = 'Copy code to clipboard';
        
        copyButton.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #a0a0a0;
            cursor: pointer;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 10;
            transition: all 0.2s;
        `;
        
        copyButton.addEventListener('mouseenter', () => {
            copyButton.style.background = 'rgba(255, 255, 255, 0.2)';
            copyButton.style.color = '#fff';
        });
        
        copyButton.addEventListener('mouseleave', () => {
            copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
            copyButton.style.color = '#a0a0a0';
        });
        
        copyButton.addEventListener('click', async function() {
            const code = pre.querySelector('code').textContent;
            try {
                await navigator.clipboard.writeText(code);
                
                const originalHTML = this.innerHTML;
                this.innerHTML = '✅';
                this.style.background = 'rgba(76, 175, 80, 0.2)';
                this.style.borderColor = 'rgba(76, 175, 80, 0.5)';
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.background = 'rgba(255, 255, 255, 0.1)';
                    this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                this.innerHTML = '❌';
                setTimeout(() => {
                    this.innerHTML = '📋';
                }, 2000);
            }
        });
        
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                document.querySelectorAll('#TableOfContents a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    const tocLinks = document.querySelectorAll('#TableOfContents a');
    const headers = [];
    
    tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                headers.push({
                    link: link,
                    target: target,
                    offset: target.offsetTop
                });
            }
        }
    });
    
    function highlightTOCOnScroll() {
        const scrollPosition = window.scrollY + 100;
        
        let current = null;
        headers.forEach(header => {
            if (header.offset <= scrollPosition) {
                current = header;
            }
        });
        
        tocLinks.forEach(link => link.classList.remove('active'));
        if (current) {
            current.link.classList.add('active');
        }
    }
    
    if (tocLinks.length > 0) {
        window.addEventListener('scroll', highlightTOCOnScroll);
        highlightTOCOnScroll(); 
    }
});