

<template>
  
  <h1>Student Search</h1>
   
   <table class="table-table-hover table-bordered" id="example">
    <thead>
      <tr>
        <th>ID</th>
        <th>First_name</th>
        <th>Last_name</th>
        <th>Gender</th>
         <th>Field of studies</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
       <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
      <td>{{user.gender}}</td>
      <td>{{user.field_of_studies}}</td>
      </tr>
      
    </tbody>
  </table>
  
</template>

<script>
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 




import axios from 'axios';
export default {
 
  mounted(){
    //API CallSSS
    axios
    .get("https://my.api.mockaroo.com/1_student_info.json?key=c06e00d0")
    .then((res)=>
    {
      this.users = res.data;
      $('#example').DataTable();
    })
  },
  data: function() {
        return {
            users:[]
        }
    },
}
</script>