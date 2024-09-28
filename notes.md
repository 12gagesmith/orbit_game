Ok so just today (9/27/24) was I just able to figure out how to push to github from my terminal, since apparently I configured it weird so it wasn't working for a while. But now it is working so I'm definitely notating how to do that so I don't forget.
1) cd to repository folder and type git add .
2) type git commit -m "insert text here"
3) type git push

This is what my terminal looked like:
(base) gagesmith@Gages-MacBook-Air-5 orbit_game % git add .
(base) gagesmith@Gages-MacBook-Air-5 orbit_game % git commit -m "example 3"
[main 6b8244e] example 3
 1 file changed, 1 insertion(+), 1 deletion(-)
(base) gagesmith@Gages-MacBook-Air-5 orbit_game % git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 301 bytes | 301.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/12gagesmith/orbit_game.git
   593673f..6b8244e  main -> main
   
