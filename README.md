<h1> <b> Spring Boot and Angular CRUD application for managing students </b> </h1>

<p>This application enables CRUD (create, read, update, delete) operations using Spring Boot and Angular.</p>

In the following we will take a look on how this application works

1. <p> When we run the application on this URL: http://localhost:4200/students
We can see the list of all students that are currently in my MySQL database.
For each student we have: Index, First Name, Last Name, Email and Actions that we can perform on each student </p>

![Screenshot 2024-02-12 084013](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/510f0ffe-0aeb-4686-8f4d-120a52acf67d)

2. <p> By clicking on 'Add Student' (top left link) we will be redirected to http://localhost:4200/create-student
This will open a form in each we can add new student by entering data for the new student. We can not submit the form until we provde valid data for each input field </p>

![Screenshot 2024-02-12 084027](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/7a38e140-9fe6-43b5-85d2-13d9f51f7fc1)

<p> When no valida data for the inputs is provided the user will get a error message for filed that does not satisfyies the input, these are all the error messages that can be provided to the user </p>

![Screenshot 2024-02-12 084041](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/e5229b2c-1b30-431c-a8fc-f8d9eac246ce)

3. <p> For each student in the student list in the Actions column we have button Update. When click on it we will be redirected to this URL: http://localhost:4200/update-student/{id}
id is the Path/URL parameter and represents the id of the student for whom we have clicked the Update button.

When we get redirected to the update URL we will see a prepopulated form with the date for the sutdent with the id that we have send. Here is an example how that looks when we click the Update button for student with id 1 </p>

![Screenshot 2024-02-12 084058](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/1c424208-6841-4e21-8a50-fbc94a1d6c0d)

<p> From this form we can update date for the student and by clicking on the Submit button this changes will applay on that student </p>

4. <p> In the student list we have button by name Details. When clicked on it we get redirected to http://localhost:4200/student-details/{id} in which we can see details about the student and it looks like this</p>

![Screenshot 2024-02-12 084111](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/a0bce109-8790-463a-a480-5b2d07b27f11)

5. <p>The last button that we have in out studet list is Delete. By clicking on it we will delete a student</p>
