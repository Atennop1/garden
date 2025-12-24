import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/Atennop1/vault",
      "Telegram": "https://t.me/atennop",
      "Email": "mailto:atennop@gmail.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  afterBody: [
    Component.MobileOnly(Component.Backlinks()),
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'Atennop1/garden',
        // from data-repo-id
        repoId: 'R_kgDONwaiBQ',
        // from data-category
        category: 'General',
        // from data-category-id
        categoryId: 'DIC_kwDONwaiBc4C0MjH',
      }
    }),
  ],
  left: [
    Component.DesktopOnly(Component.Flex({
        components: [
            { Component: Component.Darkmode() },
            { Component: Component.PageTitle() },
        ],
    })),
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(Component.Darkmode()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Backlinks()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
      Component.PageTitle(), 
      Component.MobileOnly(Component.Spacer()),
      Component.Darkmode(),
      Component.Search(),
  ],
  right: [],
}
