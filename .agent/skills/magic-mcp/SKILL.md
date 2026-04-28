---
name: magic-mcp
description: 21st.dev Magic - Premium UI component generation and search.
---
# Magic MCP (21st.dev)

This skill enables Antigravity to fetch production-ready UI components from [21st.dev](https://21st.dev).

## Configuration

The API Key is stored in the environment or can be passed directly.
**API_KEY**: `e3e94c64006d6e3fca7bbf19135cb713bf0d517dbcb1988b1ec64f7f002a3e17`

## How to Use This Skill

When the user asks for a UI component (e.g., "Build a pricing section using Magic"), follow this workflow:

### Step 1: Search for Inspiration
Use the **Browser Subagent** to search `21st.dev` for the requested component.
- Navigate to `https://21st.dev/search?q=<component_name>`
- Identify highly-rated or suitable components.
- Note the component IDs or URLs.

### Step 2: Fetch Component Code
If you have a specific component URL, use `read_browser_page` or `read_url_content` to extract the code.
Alternatively, use the Magic CLI if available:
```bash
# Example (if supported)
npx @21st-dev/magic@latest get <component_id>
```

### Step 3: Implement and Adapt
- Download the component code.
- Adapt it to the project's styling (Tailwind, CSS Modules, etc.).
- Ensure it matches the **UI/UX Pro Max** design system if one is active.

## Capabilities
- **21st_magic_component_builder**: Generate custom components.
- **Logo Search**: Find brand logos on 21st.dev.
- **Inspiration**: Pull real-world examples for any UI element.
