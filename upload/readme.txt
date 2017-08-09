1、把qshell_windows_386.exe 文件放到c:\qshell_windows_386.exe ，把hosts.txt 的内容添加到hosts 
2、把static.conf ,mstatic.conf 放到c:\
3、创建d:\static 文件夹，把fe整个文件夹拷贝到d:\static 文件夹下面，其中fe 的目录结构和线上要访问的图片的目录结构一样。例如：http://static.soyoung.com/fe/readme.txt   那么static目录下的文件结构是   fe/readme.txt

4、创建d:\mstatic 文件夹，把fe整个文件夹拷贝到d:\mstatic 文件夹下面，其中fe 的目录结构和线上要访问的图片的目录结构一样。例如：http://mstatic.soyoung.com/fe/readme.txt   那么mstatic目录下的文件结构是   fe/readme.txt


5、更新站点：
更新static.soyung.com 站点：
把需要更新的文件都放到对应的目录下之后，在cmd窗口执行 c:\qshell_windows_386.exe qupload c:\static.conf  

更新mstatic.soyung.com 站点：
把需要更新的文件都放到对应的目录下之后，在cmd窗口执行 c:\qshell_windows_386.exe qupload c:\mstatic.conf  


