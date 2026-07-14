@echo off
setlocal
set REPO=C:\Users\dillo\northstar-digital-site
echo == Deleting throwaway clones ==
if exist "%USERPROFILE%\nsd-push" rmdir /s /q "%USERPROFILE%\nsd-push"
if exist "%USERPROFILE%\nsd-gsc-push" rmdir /s /q "%USERPROFILE%\nsd-gsc-push"
if exist "%USERPROFILE%\checkmain" rmdir /s /q "%USERPROFILE%\checkmain"
echo == Deleting leftover patch/bundle/script files ==
del /q "%REPO%\seo-fixes-2026-06.patch" 2>nul
del /q "%REPO%\seo-fixes-2026-06.bundle" 2>nul
del /q "%REPO%\gsc-verify.patch" 2>nul
del /q "%REPO%\push-seo-fixes.bat" 2>nul
del /q "%REPO%\push-seo-fixes-v2.bat" 2>nul
del /q "%REPO%\push-gsc-verify.bat" 2>nul
echo == Clearing stuck git locks ==
del /q "%REPO%\.git\index.lock" 2>nul
del /q "%REPO%\.git\worktrees\nsd-main\index.lock" 2>nul
del /q "%REPO%\.git\worktrees\nsd-wt\index.lock" 2>nul
echo == Pruning stale worktrees ==
cd /d "%REPO%"
git worktree prune
echo.
echo == Remaining worktrees (should just be the main one) ==
git worktree list
echo.
echo == Nested duplicate folder check ==
if exist "%REPO%\northstar-digital-site" (
  echo A duplicate project folder exists at:
  echo   %REPO%\northstar-digital-site
  echo It has its own git history. Open it once to confirm nothing
  echo important is there, then delete it manually. Not auto-deleting
  echo it here, to be safe.
) else (
  echo No nested duplicate found - already clean.
)
echo.
echo Cleanup complete. You can delete this cleanup.bat afterward.
pause
