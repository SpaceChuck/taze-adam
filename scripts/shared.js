class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar">
    <a target="_self" href="/index.html"><img src="/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a target="_self" href="/games">Games</a>
    <a target="_self" href="/news">News</a>
    <a target="_self" href="/other">Other</a>
    <div class="socials label">Follow SpaceChuck on: <br>
        <div class="list">
            <a href="https://www.youtube.com/@SpaceChuck1"><img src="/assets/youtube_social_icon_red.png" alt="YouTube channel (SpaceChuck)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/assets/Blogger.png" alt="Blogger"></a>
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
            <a href="https://spacechuck.github.io/"><img src="/assets/SpaceChuckLogo.png"></img></a><br>
            <!-- <span style="color:#fa5c5c">English</span>
            <a href="tr">T&#252;rk&#231;e</a> -->
        </div>    
      `;
    }
}
class HeaderGames extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar">
    <a target="_self" href="/index.html"><img src="/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a target="_self" href="/games" class="active">Games</a>
    <a target="_self" href="/news">News</a>
    <a target="_self" href="/other">Other</a>
    <div class="socials label">Follow SpaceChuck on: <br>
        <div class="list">
            <a href="https://www.youtube.com/@SpaceChuck1"><img src="/assets/youtube_social_icon_red.png" alt="YouTube channel (SpaceChuck)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/assets/Blogger.png" alt="Blogger"></a>
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
    <a target="_self" href="/index.html"><img src="/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a target="_self" href="/games">Games</a>
    <a target="_self" href="/news" class="active">News</a>
    <a target="_self" href="/other">Other</a>
    <div class="socials label">Follow SpaceChuck on: <br>
        <div class="list">
            <a href="https://www.youtube.com/@SpaceChuck1"><img src="/assets/youtube_social_icon_red.png" alt="YouTube channel (SpaceChuck)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/assets/Blogger.png" alt="Blogger"></a>
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
    <a target="_self" href="/index.html"><img src="/assets/TazeAdamLogo.png" alt="Taze Adam"></a>
    <a target="_self" href="/games">Games</a>
    <a target="_self" href="/news">News</a>
    <a target="_self" href="/other" class="active">Other</a>
    <div class="socials label">Follow SpaceChuck on: <br>
        <div class="list">
            <a href="https://www.youtube.com/@SpaceChuck1"><img src="/assets/youtube_social_icon_red.png" alt="YouTube channel (SpaceChuck)"></a>
            <a href="https://spacechucksblog.blogspot.com"><img src="/assets/Blogger.png" alt="Blogger"></a>
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