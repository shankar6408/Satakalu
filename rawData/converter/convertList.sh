#!/bin/bash
split -l 6 $1
for i in `ls`
do
    ../converter.sh $i >> result.txt
    rm $i
done
