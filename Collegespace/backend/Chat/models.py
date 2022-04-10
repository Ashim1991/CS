
from django.db import models
from datetime import datetime

class Categories(models.TextChoices):
    LEVELFOUR = 'Level four'
    LEVELFIVE = 'level five'
    LEVELSIX = 'Level six'

class Sections(models.TextChoices):
      GROUPONE ='Group 1'
      GROUPTWO ='Group 2'
      GROUPTHREE ='Group 3'
      GROUPFOUR ='Group 4'
      GROUPFIVE ='Group 5'
      GROUPSIX ='Group 6'
      GROUPSEVEN ='Group 7'
      GROUPEIGHT ='Group 8'
      GROUPNINE ='Group 9'
      GROUPTEN ='Group 10'

class Courses(models.TextChoices): 
      COMPUTERSCIENCE =' BSC(hons) in Computer science'  
      INTERNATIONALBUSINESS =' BSC(hons) in International business Management' 
      NETWORKING = ' BSC(hons) in Networking' 
      MULTIMEDIA = 'BSC(hons) in Multimedia'

class Profile(models.Model):
    about = models.TextField()   
    image = models.ImageField(upload_to='photos/%Y/%m/%d',null=False,blank=False)   
    dateofbirth = models.DateField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.LEVELFOUR)
    section = models.CharField(max_length=50, choices=Sections.choices, default=Sections.GROUPONE)
    course = models.CharField(max_length=50, choices=Courses.choices, default=Courses.COMPUTERSCIENCE)
    date_created = models.DateTimeField(default=datetime.now, blank=True)
   

    def save(self, *args, **kwargs):
        super(Profile, self).save(*args, **kwargs)
        
    def __str__(self):
        return self.about
class About(models.Model):
    
   school : models.TextField(max_length=50)
   plustwo : models.TextField(max_length=50)
   college : models.TextField(max_length=50)
   email : models.EmailField()
   address : models.TextField(max_length=25)

   def save(self, *args, **kwargs):
        super(About, self).save(*args, **kwargs)
        
   def __str__(self):
        return self.school
