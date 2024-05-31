<script lang="ts">
  import { exioButton, exioFadeInAnimation } from 'exio/svelte';
  import { STAGGER } from '../../ts/constants';
  const links: {
    title: string;
    url: string;
    color?: boolean;
    disabled?: boolean;
  }[] = [
    {
      title: 'arXiv',
      url: 'https://arxiv.org/abs/2404.01976',
    },
    {
      title: 'CVPR Page',
      url: 'https://cvpr.thecvf.com/virtual/2024/poster/29723',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/KentoNishi/JTR-CVPR-2024',
      color: true,
    },
  ];
</script>

<div class="banner" data-theme="light">
  <div class="parent" style="width: calc(100% - 2 * var(--grid-padding));">
    <div class="profile" use:exioFadeInAnimation>
      <div class="info">
        <div class="name">Joint-Task Regularization for Partially Labeled Multi-Task Learning</div>
        <div class="text-center" style="font-weight: bold;">CVPR 2024</div>
        <div class="affiliation">
          <div class="text-center">
            <span class="no-break"><a target="_blank" href="https://kentonishi.com/">Kento Nishi</a>*</span>,
            <span class="no-break"><a target="_blank" href="https://sites.google.com/site/jskimcv/">Junsik Kim</a>*</span>,
            <span class="no-break"><a target="_blank" href="https://li-wanhua.github.io/">Wanhua Li</a></span>,
            <span class="no-break"><a target="_blank" href="https://vcg.seas.harvard.edu/">Hanspeter Pfister</a></span>
          </div>
          <div class="text-center">Harvard University</div>
        </div>
      </div>
    </div>
    <div class="links">
      {#each links as link, index}
        <a href={link.url} target="_blank" style="text-decoration: none;" on:click={(e) => {
          if ('disabled' in link && link.disabled) {
            e.preventDefault();
          }
        }}>
          <div
            use:exioFadeInAnimation
            style="
              animation-delay: {(index + 1) * STAGGER}s;
            "
          >
            <button use:exioButton class="popup paper-link" disabled={Boolean('disabled' in link && link.disabled)}>
              <div class="title">{link.title}</div>
            </button>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  .text-center {
    text-align: center;
  }
  .links {
    display: flex;
    gap: 8px;
  }
  .no-break {
    white-space: nowrap;
  }
  .banner {
    width: 100%;
    /* background-color: var(--gray-fill); */
    background-color: #d1f4ff;
    padding: 2rem 0px 2rem 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden !important;
    position: relative;
  }
  .profile {
    display: flex;
    max-height: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .parent {
    display: flex;
    max-height: 100%;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1000px;
    z-index: 10;
    flex-direction: column;
  }
  .affiliation {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .name {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  a {
    /* color: var(--blue-accent) !important; */
    text-decoration: underline;
    color: blue !important;
  }
  /* .tile {
    height: 100px;
    background-color: transparent;
  } */
  .banner * {
    overflow: visible;
  }
  .paper-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
</style>
