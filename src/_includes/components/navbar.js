const {html} = require('common-tags');

function Navbar() {
  return html`
  <div class="navbar bg-base-100"> <!-- Nav Bar -->
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="/">NoahWebsite:)</a>
    </div>
    <div class="flex-none justify even">
      <button class="btn btn-rectangle btn-ghost mx-3">
        <a href="/api" >Disney Characters</a>
      </button>
      <button class="btn btn-square btn-ghost">
        <a href="/blog/blogs">Blogs</a>
      </button>
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </div>
  `;
}

module.exports = Navbar;