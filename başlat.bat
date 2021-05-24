echo off
title Nether v12
color c
cls
:a
node --expose-gc --optimize-for-size --max-old-space-size=2048 shNor.js
goto a
pause