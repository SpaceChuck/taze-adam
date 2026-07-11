class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar">
    <a target="_self" href="/taze-adam/index.html"><img src="/taze-adam/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a style="color: #fe2323" target="_self" href="https://tazeadam.pages.dev">New website!! I couldn't be bothered to add redirects to like 4,000 pages so click me instead</a>
    <a target="_self" href="/taze-adam/games">Games</a>
    <a target="_self" href="/taze-adam/news">News</a>
    <a target="_self" href="/taze-adam/other">Other</a>
    <div class="socials label">Follow SpaceChuck on: <br>
        <div class="list">
            <a href="https://www.youtube.com/@SpaceChuck1"><img src="/taze-adam/assets/youtube_social_icon_red.png" alt="YouTube channel (SpaceChuck)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/taze-adam/assets/Blogger.png" alt="Blogger"></a>
            <a href="https://bsky.app/profile/spacechuck.github.io"><img src="/taze-adam/assets/Bluesky.png" alt="Bluesky"></a>
            <a href="https://www.instagram.com/spacechuckofficial/"><img src="/taze-adam/assets/Instagram.png" alt="Instagram"></a>
            <a type="application/rss+xml" href="rss.xml"><img src="/taze-adam/assets/rssicon.png" alt="RSS Feed"></a>
            <div class="empty"></div>
        </div>
    </div>
</div>
      `;
    }
  }
class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <div class="footer">
            <a href="https://spacechuck.github.io/"><img src="/taze-adam/assets/SpaceChuckLogo.png"></img></a><br>
            <span style="color:#fa5c5c">English</span>
            <a href="/taze-adam/tr">T&#252;rk&#231;e</a>
        </div>    
      `;
    }
}
class HeaderGames extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar">
    <a target="_self" href="/taze-adam/index.html"><img src="/taze-adam/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a style="color: #fe2323" target="_self" href="https://tazeadam.pages.dev/games">New website!! I couldn't be bothered to add redirects to like 4,000 pages so click me instead</a>
    <a target="_self" href="/taze-adam/games" class="active">Games</a>
    <a target="_self" href="/taze-adam/news">News</a>
    <a target="_self" href="/taze-adam/other">Other</a>
    <div class="socials label">Follow SpaceChuck on: <br>
        <div class="list">
            <a href="https://www.youtube.com/@SpaceChuck1"><img src="/taze-adam/assets/youtube_social_icon_red.png" alt="YouTube channel (SpaceChuck)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/taze-adam/assets/Blogger.png" alt="Blogger"></a>
            <a href="https://bsky.app/profile/spacechuck.github.io"><img src="/taze-adam/assets/Bluesky.png" alt="Bluesky"></a>
            <a href="https://www.instagram.com/spacechuckofficial/"><img src="/taze-adam/assets/Instagram.png" alt="Instagram"></a>
            <a type="application/rss+xml" href="rss.xml"><img src="/taze-adam/assets/rssicon.png" alt="RSS Feed"></a>
            <div class="empty"></div>
        </div>
    </div>
</div>
      `;
    }
}
class HeaderNews extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar">
    <a target="_self" href="/taze-adam/index.html"><img src="/taze-adam/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a style="color: #fe2323" target="_self" href="https://tazeadam.pages.dev/news">New website!! I couldn't be bothered to add redirects to like 4,000 pages so click me instead</a>
    <a target="_self" href="/taze-adam/games">Games</a>
    <a target="_self" href="/taze-adam/news" class="active">News</a>
    <a target="_self" href="/taze-adam/other">Other</a>
    <div class="socials label">Follow SpaceChuck on: <br>
        <div class="list">
            <a href="https://www.youtube.com/@SpaceChuck1"><img src="/taze-adam/assets/youtube_social_icon_red.png" alt="YouTube channel (SpaceChuck)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/taze-adam/assets/Blogger.png" alt="Blogger"></a>
            <a href="https://bsky.app/profile/spacechuck.github.io"><img src="/taze-adam/assets/Bluesky.png" alt="Bluesky"></a>
            <a href="https://www.instagram.com/spacechuckofficial/"><img src="/taze-adam/assets/Instagram.png" alt="Instagram"></a>
            <a type="application/rss+xml" href="rss.xml"><img src="/taze-adam/assets/rssicon.png" alt="RSS Feed"></a>
            <div class="empty"></div>
        </div>
    </div>
</div>
      `;
    }
}
class HeaderOther extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar">
    <a target="_self" href="/taze-adam/index.html"><img src="/taze-adam/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a style="color: #fe2323" target="_self" href="https://tazeadam.pages.dev/other">New website!! I couldn't be bothered to add redirects to like 4,000 pages so click me instead</a>
    <a target="_self" href="/taze-adam/games">Games</a>
    <a target="_self" href="/taze-adam/news">News</a>
    <a target="_self" href="/taze-adam/other" class="active">Other</a>
    <div class="socials label">Follow SpaceChuck on: <br>
        <div class="list">
            <a href="https://www.youtube.com/@SpaceChuck1"><img src="/taze-adam/assets/youtube_social_icon_red.png" alt="YouTube channel (SpaceChuck)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/taze-adam/assets/Blogger.png" alt="Blogger"></a>
            <a href="https://bsky.app/profile/spacechuck.github.io"><img src="/taze-adam/assets/Bluesky.png" alt="Bluesky"></a>
            <a href="https://www.instagram.com/spacechuckofficial/"><img src="/taze-adam/assets/Instagram.png" alt="Instagram"></a>
            <a type="application/rss+xml" href="rss.xml"><img src="/taze-adam/assets/rssicon.png" alt="RSS Feed"></a>
            <div class="empty"></div>
        </div>
    </div>
</div>
      `;
    }
}
customElements.define('home-navbar', Header);
customElements.define('games-navbar', HeaderGames);
customElements.define('news-navbar', HeaderNews);
customElements.define('other-navbar', HeaderOther);

customElements.define('main-footer', Footer);