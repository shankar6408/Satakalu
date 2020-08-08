#!/bin/bash
sed 's/$/ NL /g' s.txt > temp.txt
echo "{"
echo "'words' : ["
for i in `cat temp.txt`
do
	if [[ $i = \'Mean* ]]
	then
		break
	fi
	echo "{ 'word': '$i' , 'meaning': '', 'grammarlinks': []},"
done
echo "],"
meaning=`grep -e 'Mean.*' temp.txt | tr -d 'NL'`
echo $meaning
echo "}"
