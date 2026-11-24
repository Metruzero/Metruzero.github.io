// Content collections: structured content that lives in files.
// Each collection says where its files are and what details every file must have.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // Every Markdown file in src/content/projects/ is one project.
  // The file name becomes its ID and URL: bloom.md -> /projects/bloom
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),

  // The details block (frontmatter) every project file must have.
  // If a file is missing a required field or has the wrong type,
  // the build stops with an error that names the file and the field.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(120), // one line for cards and lists
      date: z.coerce.date(), // when the project was finished
      cover: image().optional(), // screenshot, optimized automatically
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      role: z.string().optional(), // e.g. "Sole programmer"
      team: z.string().optional(), // e.g. "Solo" or "Team of 3"
      duration: z.string().optional(), // e.g. "48 hours"
      links: z
        .object({
          play: z.url().optional(),
          github: z.url().optional(),
        })
        .default({}),
      featured: z.boolean().default(false), // show on the homepage?
    }),
});

export const collections = { projects };
