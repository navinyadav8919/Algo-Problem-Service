const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

/**
 * Sanitizes markdown content by:
 * 1. Converting markdown → HTML
 * 2. Removing unsafe HTML (e.g., <script>)
 * 3. Converting clean HTML → Markdown
 */
function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();

    // Convert markdown → HTML
    const convertedHtml = marked.parse(markdownContent);

    // Sanitize HTML (removes scripts & unsafe tags)
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });

    // Convert sanitized HTML → Markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;