# 🚀 Quick Deployment Guide for GitHub Pages

## Prerequisites
- GitHub account
- Git installed on your computer
- Project files ready

## Step-by-Step Deployment

### Option 1: Using GitHub Web Interface (Easiest)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `batu-timetable` (or any name you prefer)
   - Select **Public**
   - ✅ Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. **Upload Files**
   - On the repository page, click "uploading an existing file"
   - Drag and drop ALL files from your "BATU timeable" folder
   - OR click "choose your files" and select all files
   - Scroll down and click "Commit changes"

3. **Enable GitHub Pages**
   - Click **Settings** tab in your repository
   - Scroll down to **Pages** section (left sidebar)
   - Under "Source", select:
     - Branch: `main`
     - Folder: `/ (root)`
   - Click **Save**

4. **Access Your Website**
   - Wait 2-3 minutes for deployment
   - Your site will be live at:
     ```
     https://YOUR-USERNAME.github.io/batu-timetable/
     ```
   - GitHub will show the link in the Pages settings

---

### Option 2: Using Git Command Line

1. **Initialize Git** (in your project folder)
   ```bash
   cd "c:\.vscode\BATU timeable"
   git init
   ```

2. **Add All Files**
   ```bash
   git add .
   ```

3. **Commit Changes**
   ```bash
   git commit -m "Initial commit: BATU Timetable Dashboard"
   ```

4. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create repository (as described in Option 1, step 1)
   - Copy the repository URL

5. **Connect and Push**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/batu-timetable.git
   git branch -M main
   git push -u origin main
   ```

6. **Enable GitHub Pages**
   - Follow step 3 from Option 1 above

---

## Updating Your Website

After making changes to your code:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

Your website will automatically update in 1-2 minutes!

---

## Troubleshooting

### Site Not Loading?
- Wait 3-5 minutes after first deployment
- Check Settings → Pages for the live URL
- Ensure repository is **Public**
- Clear browser cache and try again

### Images Not Showing?
- Verify all image paths are relative (e.g., `images/logo.png` not `/images/logo.png`)
- Check file names match exactly (case-sensitive on GitHub)

### 404 Error?
- Ensure `index.html` is in the root folder
- Check Pages settings: Source should be `main` branch, `/ (root)` folder

---

## Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In repository Settings → Pages:
   - Enter your custom domain
   - Click Save
3. Update your domain's DNS settings:
   - Add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add CNAME record: `YOUR-USERNAME.github.io`

---

## Testing Before Deployment

### Local Testing
1. Open `index.html` in browser directly, OR
2. Use VS Code Live Server extension:
   - Install "Live Server" extension
   - Right-click `index.html`
   - Select "Open with Live Server"

### Validation
- **HTML:** https://validator.w3.org/
- **CSS:** https://jigsaw.w3.org/css-validator/
- **Links:** Test all navigation and internal links

---

## Security & Best Practices

✅ **Do:**
- Keep repository public for GitHub Pages
- Use relative paths for all links
- Test on multiple browsers
- Compress images before uploading

❌ **Don't:**
- Commit sensitive data (passwords, API keys)
- Use absolute file paths (C:\Users\...)
- Include large files (>100MB)

---

## Need Help?

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **Git Documentation:** https://git-scm.com/doc
- **Course Instructor:** [instructor email]

---

**Good luck with your deployment! 🎉**
