sudo git rm -r docs
echo '-=[清空发布目录]=-'
sudo git commit -m 'cleanDist'
echo '-=[提交清空完成]=-'
sudo npm run build
echo '-=[打包完成]=-'
sudo touch ./docs/CNAME
sudo chmod -R 777 *
sudo echo 'tomcodesign.com' > ./docs/CNAME
echo '-=[写入CNAME配置]=-'
sudo git add *
echo '-=[添加文件完成]=-'
sudo git add docs -f
echo '-=[添加发布目录]=-'
sudo git commit -m $1
echo '-=[提交文件完成]=-'
sudo git push
echo '-=[已推送至远程仓库]=-'