@echo off
setlocal
cd /d "%USERPROFILE%"
if exist nsd-push rmdir /s /q nsd-push
echo Cloning a fresh copy...
git clone https://github.com/dillonm2222-lab/northstar-digital-site.git nsd-push || goto fail
cd nsd-push
git checkout -b seo-fixes-2026-06 || goto fail
echo Applying fixes (3-way merge)...
git am --3way "C:\Users\dillo\northstar-digital-site\seo-fixes-2026-06.patch"
if %errorlevel%==0 goto push
echo Primary method hit a snag, using fallback...
git am --abort
git apply --3way --index --whitespace=nowarn "C:\Users\dillo\northstar-digital-site\seo-fixes-2026-06.patch" || goto fail
git commit -m "Raise pricing to $247/$447/$849; fix robots sitemap, www canonical, footer NAP" || goto fail
:push
echo Pushing the branch to GitHub...
git push -u origin seo-fixes-2026-06 || goto fail
echo.
echo ============================================
echo SUCCESS. Scroll up for a GitHub link to open
echo a Pull Request, then review and merge it.
echo ============================================
pause
exit /b 0
:fail
echo.
echo Something went wrong - copy the text above and send it to Claude.
pause
exit /b 1
