@echo off
setlocal
cd /d "%USERPROFILE%"
if exist nsd-gsc-push rmdir /s /q nsd-gsc-push
echo Cloning a fresh copy...
git clone https://github.com/dillonm2222-lab/northstar-digital-site.git nsd-gsc-push || goto fail
cd nsd-gsc-push
git checkout -b gsc-verify || goto fail
echo Applying Search Console verification tag...
git apply --3way --index --whitespace=nowarn "C:\Users\dillo\northstar-digital-site\gsc-verify.patch" || goto fail
git commit -m "Add Google Search Console verification meta tag" || goto fail
echo Pushing...
git push -u origin gsc-verify || goto fail
echo.
echo ============================================
echo SUCCESS. Open the GitHub link above, merge
echo the PR, wait for Vercel, then click Verify.
echo ============================================
pause
exit /b 0
:fail
echo.
echo Something went wrong - send the text above to Claude.
pause
exit /b 1
