<script lang="ts">
  import teaser from '$lib/assets/Poster.png';
  import overview from '$lib/assets/overview.png';
  import posterPdf from '$lib/assets/Poster.pdf?url';
  const bibtex = `@misc{nishi2024jointtask,
    title={Joint-Task Regularization for Partially Labeled Multi-Task Learning}, 
    author={Kento Nishi and Junsik Kim and Wanhua Li and Hanspeter Pfister},
    year={2024},
    eprint={2404.01976},
    archivePrefix={arXiv},
    primaryClass={cs.CV}
}`;
</script>

<div class="paragraph">
  <div class="heading">TL;DR</div>
  <div class="content">
    <span>
      Joint-Task Regularization (JTR) leverages cross-task relations
      to improve learning when data is not fully labeled for all tasks.
    </span>
    <a href={posterPdf} target="_blank" style="width: 100%;">
      <img src={teaser} alt="Poster" class="teaser" />
    </a>
    <!-- <div class="images">
      <img src={teaser} alt="Teaser"class="teaser" />
      <img src={overview} alt="Overview"class="overview" />
    </div> -->
  </div>
  <div class="heading">Abstract</div>
  <div class="content">
    <span>
      Multi-task learning has become increasingly popular in the machine
      learning field, but its practicality is hindered by the need for large,
      labeled datasets. Most multi-task learning methods depend on fully labeled
      datasets wherein each input example is accompanied by ground-truth labels
      for all target tasks. Unfortunately, curating such datasets can be prohibitively
      expensive and impractical, especially for dense prediction tasks which require
      per-pixel labels for each image. With this in mind, we propose Joint-Task
      Regularization (JTR), an intuitive technique which leverages cross-task
      relations to simultaneously regularize all tasks in a single joint-task
      latent space to improve learning when data is not fully labeled for all tasks.
      JTR stands out from existing approaches in that it regularizes all tasks jointly
      rather than separately in pairs -- therefore, it achieves linear complexity relative
      to the number of tasks while previous methods scale quadratically. To demonstrate
      the validity of our approach, we extensively benchmark our method across a wide
      variety of partially labeled scenarios based on NYU-v2, Cityscapes, and Taskonomy.
    </span>
    <img src={overview} alt="Overview"class="overview" />
  </div>
  <div class="heading">BibTeX Citation</div>
  <div class="content">
    <span>
      <pre>{bibtex}</pre>
    </span>
  </div>
</div>

<style>
  .paragraph {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
  }
  .heading {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
  }
  .teaser {
    min-width: 200px;
    /* max-width: 400px; */
    width: 100%;
  }
  .overview {
    min-width: 200px;
    max-width: 800px;
    width: 100%;
  }
  /* .images {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }
  @media (max-width: 1000px) {
    .images {
      display: flex;
      flex-direction: column;
    }
  } */
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content > span {
    width: 100%;
  }
  img {
    margin-top: 1rem;
  }
  pre {
    white-space: pre-wrap;
    background-color: #f4f4f4;
    padding: 0.5rem;
  }
</style>
