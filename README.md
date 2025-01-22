This is a [Tina CMS](https://tina.io/) project.

# Ciel's Tina Starter

- Using SCSS for organized styling
- Theme easily configurable using \_themes.scss, with all (or most) colors, fonts, and spacing using variables
- Starter components that I find useful for any small business or non-profit website, including:
  - Header component with user-friendly process for adding links internal or external links
  - Custom Content block
    - Display between 1-4 columns, each of which can contain rich-text, images, and YouTube embeds.
    - Customize background according to theme options, or add a backgound image.
  - Google Calendar embed block
  - Footer
  - _More components coming soon_

## TODO

- [ ] Add 404 (Test on live build before deciding this doesn't work yet)
- [ ] Make it so nav links have different styling and don't link when they go to the current page.
- [ ] Implement visual editing click-to-edit
- [x] Implement block-based editing
- [x] implement auto-generated file name when creating new pages
    - [ ] Check error when editing a block in a new page
- [ ] implement collection search in admin
- Block components
    - [x] Add Google Calendar block
    - [x] Custom Content block
        - [x] Add options for background
        - [ ] Split ColumnRatio field into 2 conditionally rendered fields
        - [ ] Maybe: Add options for centering header and/or column content
    - [ ] Testimonial block
    - [ ] Hero block
    - [ ] Hero (Carousel) block
    - [ ] Image carousel block
    - [ ] Timeline block
- Embedded Components
    - [x] Webpage / Google Form
    - [x] Call to Action
    - [x] YouTube video

- [ ] Build out blog functionality, components, and styling
- [x] floating toolbar on heading fields
     - Awaiting resolution of [this issue](https://github.com/tinacms/tinacms/issues/5008) (RESOLVED)
- [x]add roadmap for future components

## Getting Started

Follow Tina's [Getting Started Guide](https://tina.io/docs/getting-started/)
