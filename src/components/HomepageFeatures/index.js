import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Edit visually',
    description: (
      <>
        Write docs in a Notion-like editor with Dhub — slash commands, callouts,
        tabs, tables, and images, all rendered the way readers will see them.
      </>
    ),
  },
  {
    title: 'Everything in Git',
    description: (
      <>
        Every change lands in your GitHub repo as plain Markdown. Push straight
        to main or open a pull request for review — your choice.
      </>
    ),
  },
  {
    title: 'Deploy anywhere',
    description: (
      <>
        A standard Docusaurus site underneath: deploy to Vercel, Netlify, or
        GitHub Pages, and every push goes live automatically.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
