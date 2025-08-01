<!-- Generated by SpecStory -->

# Add post titles to file names (2025-06-30 15:21Z)

_**User**_

can you add the title of each post to the file name so its not just the date? shorten the title if it's too long (3/4 first words is enough)

---

_**Assistant**_

I'll help you rename the blog post files to include their titles. First, let me check the content of these posts to get their titles.

---

Read file: app/blog/posts/2025-06-07.mdx

---

Read file: app/blog/posts/2025-06-13-a.mdx

---

Read file: app/blog/posts/2025-06-13-b.mdx

---

Read file: app/blog/posts/2025-06-21.mdx

---

Read file: app/blog/posts/2025-06-29.mdx

---

Now I'll rename the files to include shortened versions of their titles. I'll use the search_replace tool to update any references to these files in the codebase. Let me first check where these files might be referenced.

---

<details>
            <summary>Grep search for "2025-06" • **6** files</summary>
        
| File | Line | Match |
|------|------|-------|
| `file:///Users/guillaumecaronm4/Documents/dev/FRACTAL-BOOTCAMP/portfolio-guillaume-caron/app/blog/posts/2025-06-21.mdx` | L2 | `publishedAt: '2025-06-21'` |
| `file:///Users/guillaumecaronm4/Documents/dev/FRACTAL-BOOTCAMP/portfolio-guillaume-caron/app/blog/posts/2025-06-07.mdx` | L2 | `publishedAt: '2025-06-07'` |
| `file:///Users/guillaumecaronm4/Documents/dev/FRACTAL-BOOTCAMP/portfolio-guillaume-caron/app/blog/posts/2025-06-13-b.mdx` | L2 | `publishedAt: '2025-06-13'` |
| `file:///Users/guillaumecaronm4/Documents/dev/FRACTAL-BOOTCAMP/portfolio-guillaume-caron/app/blog/posts/2025-06-29.mdx` | L2 | `publishedAt: '2025-06-29'` |
| `file:///Users/guillaumecaronm4/Documents/dev/FRACTAL-BOOTCAMP/portfolio-guillaume-caron/app/blog/posts/2025-06-13-a.mdx` | L2 | `publishedAt: '2025-06-13'` |
| `file:///Users/guillaumecaronm4/Documents/dev/FRACTAL-BOOTCAMP/portfolio-guillaume-caron/app/blog/posts/2025-06-07.mdx` | L2 | `publishedAt: '2025-06-07'` |

</details>

---

Let me check if there are any other references to these files in the codebase:

---

<details>
            <summary>Searched codebase "How are blog posts loaded or referenced in the code?" • **25** results</summary>
        
| File | Lines |
|------|-------|
| `app/components/posts.tsx` | L1-36 |
| `app/blog/utils.ts` | L66-70 |
| `app/blog/page.tsx` | L1-6 |
| `app/components/blog-posts.tsx` | L1-27 |
| `app/blog/[slug]/page.tsx` | L1-12 |
| `app/blog/page.tsx` | L6-15 |
| `app/blog/[slug]/page.tsx` | L52-111 |
| `app/blog/[slug]/page.tsx` | L111-117 |
| `app/components/blog-posts.tsx` | L27-64 |
| `app/page.tsx` | L1-20 |
| `app/rss/route.ts` | L1-42 |
| `app/blog/[slug]/page.tsx` | L12-52 |
| `app/sitemap.ts` | L3-17 |
| `app/blog/utils.ts` | L46-66 |
| `app/sitemap.ts` | L1-3 |
| `app/blog/posts/2025-06-29.mdx` | L1-17 |
| `app/blog/utils.ts` | L1-10 |
| `app/blog/posts/2025-06-21.mdx` | L1-20 |
| `app/blog/posts/2025-06-07.mdx` | L1-26 |
| `app/blog/utils.ts` | L35-40 |
| `app/blog/posts/2025-06-13-b.mdx` | L1-25 |
| `app/blog/utils.ts` | L70-106 |
| `app/blog/utils.ts` | L10-31 |
| `app/blog/utils.ts` | L31-35 |
| `app/blog/posts/2025-06-13-a.mdx` | L1-19 |

</details>

---

I see that the blog posts are loaded by filename in the `getBlogPosts` function, and the slugs are generated from the filenames. Let me rename the files with their titles:

1. `2025-06-07.mdx` → `2025-06-07-entering-the-accelerator.mdx`
2. `2025-06-13-a.mdx` → `2025-06-13-forgetting-about-speed.mdx`
3. `2025-06-13-b.mdx` → `2025-06-13-keeping-ai-blind.mdx`
4. `2025-06-21.mdx` → `2025-06-21-building-my-own-tools.mdx`
5. `2025-06-29.mdx` → `2025-06-29-mirror-at-the-edges.mdx`

Let me rename these files:

---

```bash
cd app/blog/posts && mv 2025-06-07.mdx 2025-06-07-entering-the-accelerator.mdx && mv 2025-06-13-a.mdx 2025-06-13-forgetting-about-speed.mdx && mv 2025-06-13-b.mdx 2025-06-13-keeping-ai-blind.mdx && mv 2025-06-21.mdx 2025-06-21-building-my-own-tools.mdx && mv 2025-06-29.mdx 2025-06-29-mirror-at-the-edges.mdx
```

```
?➜  posts git:(main) 

```

---

Great! I've renamed all the blog post files to include shortened versions of their titles. The files are now:

1. `2025-06-07-entering-the-accelerator.mdx`
2. `2025-06-13-forgetting-about-speed.mdx`
3. `2025-06-13-keeping-ai-blind.mdx`
4. `2025-06-21-building-my-own-tools.mdx`
5. `2025-06-29-mirror-at-the-edges.mdx`

The code that loads these files uses the filename without extension as the slug, and since it's using the filesystem directly to read the files, no other code changes are needed. The blog should continue to work as expected with these new, more descriptive filenames.

---

