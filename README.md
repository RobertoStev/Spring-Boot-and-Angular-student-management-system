<h1> <b> Spring Boot and Angular CRUD application for managing students </b> </h1>

<p>This application supports CRUD (Create, Read, Update, Delete) operations using Spring Boot and Angular.</p>

<p>Now, let's explore how this application works. </p>

<p> When we access the application at the following URL: http://localhost:4200/students, a list of all students currently present in my MySQL database is displayed. <br>
Each student entry includes an index, first name, last name, email and corresponding actions that can be performed on each student. </p>

![Screenshot 2024-02-12 102800](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/7a157635-c744-4091-882c-8448f1d6d2d6)

<p> Clicking on 'Add Student' (the top-left link) redirects us to http://localhost:4200/create-student <br>
This opens a form where we can add a new student by providing data for each field. The Submit button is disabled until valid data is provided for each input field. </p>

![Screenshot 2024-02-12 102833](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/8ae81f73-2586-446d-a10d-859d3259724b)

<p> When no valid data is provided for an input field, the user will receive an error message. The following are all the error messages that can be presented to the user. </p>

![Screenshot 2024-02-12 102850](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/3ad28827-1d81-4e84-8749-ac231a2ad71c)

<p> For each student in the student list, there is an 'Update' button in the Actions column. When clicked, we will be redirected to the following URL: http://localhost:4200/update-student/{id} <br>
The '{id}' is a path/URL parameter representing the unique identifier of the student for whom the 'Update' button was clicked.

<p> When we get redirected to the update URL, we will see a prepopulated form with the data for the student with the ID that we have sent. Here is an example of how it looks when we click the 'Update' button for the student with ID 1. </p>

![Screenshot 2024-02-12 102904](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/65b0d548-e29c-4bac-9453-4bc182af1e64)

<p> From this form, we can update the data for the student. By clicking on the Submit button, these changes will apply to that student. </p>

<p> In the student list, there is a 'Details' button. Clicking on it redirects us to http://localhost:4200/student-details/{id}, where we can view details about the student. Here's an example.</p>

![Screenshot 2024-02-12 102921](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/bdddf6a7-cf98-487b-8a0b-715b5a4048b9)

<p> The last button that we have in our student list is 'Delete'. By clicking on it, we will delete a student. </p>
