

var myPoints=[
[1,2,3],[4,5,6],[8,9,2],[2,2,3],
[4,5,6],[8,9,2],[2,2,3],[4,5,6],
[8,9,2],[2,2,3],[4,5,6],[8,9,2],
[2,2,3],[4,5,6],[8,9,2],[2,2,3],
[2,2,3],[4,5,6],[8,9,2],[2,2,3]
];

Areas=LisFragment(myList,4);
/**   
Areas=[
[[1,2,3],[4,5,6],[8,9,2],[2,2,3]],
[[4,5,6],[8,9,2],[2,2,3],[4,5,6]],
[[8,9,2],[2,2,3],[4,5,6],[8,9,2]],
[[2,2,3],[4,5,6],[8,9,2],[2,2,3]]
];

4=Areas.length
**/


function LisFragment(arr,num_frag){
  var datas=[],grup=[];
  var cont=1;
  for(var i=0;i<arr.length;i++)
  {
    grup.push(arr[i])
    if(cont==num_frag)
    {
      cont=0;
      datas.push(grup);
      grup=[];
    }
    cont++;
  }
  return datas;
}

