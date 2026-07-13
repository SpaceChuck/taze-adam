class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar">
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/index.html"><img src="/taze-adam/slightlynewerbutstillold/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/games">Oyunlar</a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/news">Haberler</a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/other">Diğer</a>
    <div class="socials label">SpaceChuck'ı takip edin: <br>
        <div class="list">
            <a href="https://www.youtube.com/@TazeAdamTR"><img src="/taze-adam/slightlynewerbutstillold/assets/youtube_social_icon_red.png" alt="YouTube kanalı (Taze Adam)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/taze-adam/slightlynewerbutstillold/assets/Blogger.png" alt="Blogger"></a>
            <a href="https://bsky.app/profile/spacechuck.github.io"><img src="/taze-adam/slightlynewerbutstillold/assets/Bluesky.png" alt="Bluesky"></a>
            <a href="https://www.instagram.com/spacechuckofficial/"><img src="/taze-adam/slightlynewerbutstillold/assets/Instagram.png" alt="Instagram"></a>
            <a type="application/rss+xml" href="rss.xml"><img src="/taze-adam/slightlynewerbutstillold/assets/rssicon.png" alt="RSS"></a>
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
            <a href="https://spacechuck.github.io/"><img src="/taze-adam/slightlynewerbutstillold/assets/SpaceChuckLogo.png"></img></a><br>
            <a href="/taze-adam/slightlynewerbutstillold/">English</a>
            <span style="color:#fa5c5c">T&#252;rk&#231;e</span>
        </div>    
      `;
    }
}
class HeaderGames extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar">
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/index.html"><img src="/taze-adam/slightlynewerbutstillold/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/games" class="active">Oyunlar</a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/news">Haberler</a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/other">Diğer</a>
    <div class="socials label">SpaceChuck'ı takip edin: <br>
        <div class="list">
            <a href="https://www.youtube.com/@TazeAdamTR"><img src="/taze-adam/slightlynewerbutstillold/assets/youtube_social_icon_red.png" alt="YouTube kanalı (Taze Adam)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/taze-adam/slightlynewerbutstillold/assets/Blogger.png" alt="Blogger"></a>
            <a href="https://bsky.app/profile/spacechuck.github.io"><img src="/taze-adam/slightlynewerbutstillold/assets/Bluesky.png" alt="Bluesky"></a>
            <a href="https://www.instagram.com/spacechuckofficial/"><img src="/taze-adam/slightlynewerbutstillold/assets/Instagram.png" alt="Instagram"></a>
            <a type="application/rss+xml" href="rss.xml"><img src="/taze-adam/slightlynewerbutstillold/assets/rssicon.png" alt="RSS"></a>
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
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/index.html"><img src="/taze-adam/slightlynewerbutstillold/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/games">Oyunlar</a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/news" class="active">Haberler</a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/other">Diğer</a>
    <div class="socials label">SpaceChuck'ı takip edin: <br>
        <div class="list">
            <a href="https://www.youtube.com/@TazeAdamTR"><img src="/taze-adam/slightlynewerbutstillold/assets/youtube_social_icon_red.png" alt="YouTube kanalı (Taze Adam)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/taze-adam/slightlynewerbutstillold/assets/Blogger.png" alt="Blogger"></a>
            <a href="https://bsky.app/profile/spacechuck.github.io"><img src="/taze-adam/slightlynewerbutstillold/assets/Bluesky.png" alt="Bluesky"></a>
            <a href="https://www.instagram.com/spacechuckofficial/"><img src="/taze-adam/slightlynewerbutstillold/assets/Instagram.png" alt="Instagram"></a>
            <a type="application/rss+xml" href="rss.xml"><img src="/taze-adam/slightlynewerbutstillold/assets/rssicon.png" alt="RSS"></a>
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
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/index.html"><img src="/taze-adam/slightlynewerbutstillold/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/games">Oyunlar</a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/news">Haberler</a>
    <a target="_self" href="/taze-adam/slightlynewerbutstillold/tr/other" class="active">Diğer</a>
    <div class="socials label">SpaceChuck'ı takip edin: <br>
        <div class="list">
            <a href="https://www.youtube.com/@TazeAdamTR"><img src="/taze-adam/slightlynewerbutstillold/assets/youtube_social_icon_red.png" alt="YouTube kanalı (Taze Adam)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/taze-adam/slightlynewerbutstillold/assets/Blogger.png" alt="Blogger"></a>
            <a href="https://bsky.app/profile/spacechuck.github.io"><img src="/taze-adam/slightlynewerbutstillold/assets/Bluesky.png" alt="Bluesky"></a>
            <a href="https://www.instagram.com/spacechuckofficial/"><img src="/taze-adam/slightlynewerbutstillold/assets/Instagram.png" alt="Instagram"></a>
            <a type="application/rss+xml" href="rss.xml"><img src="/taze-adam/slightlynewerbutstillold/assets/rssicon.png" alt="RSS"></a>
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