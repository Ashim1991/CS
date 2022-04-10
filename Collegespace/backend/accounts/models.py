
from distutils.command.upload import upload


from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from datetime import datetime
from django.template.defaultfilters import slugify

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        
        user.is_superuser = False
        user.set_password(password)
        user.save()
        

        return user
    def create_superuser(self, email, password,**extra_fields):
        
        user = self.create_user(
            email,
            password=password,
        )
        user.is_superuser = False
        user.save(using=self._db)
        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.email

class Service(models.Model):
    title = models.CharField(max_length=50)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/')
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        

        super(Service, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

class Post(models.Model):
    name = models.CharField( max_length=50,null=False,blank=False)
    description = models.TextField()   
    image = models.ImageField(upload_to='photos/%Y/%m/%d',null=False,blank=False)
    createdby = models.CharField(max_length=50,blank=False, default='admin')   
   

    def save(self, *args, **kwargs):
        

        super(Post, self).save(*args, **kwargs)
        
    def __str__(self):
        return self.name

class Question(models.Model):
    title = models.CharField( max_length=50,null=False,blank=False)
    description = models.TextField()    
   

    def save(self, *args, **kwargs):
        

        super(Question, self).save(*args, **kwargs)
        
    def __str__(self):
        return self.title       


class Schedule(models.Model):
    
    title = models.CharField( max_length=50,null=False,blank=False) 
    description = models.TextField()  
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2) 
    
   

    def save(self, *args, **kwargs):
        super(Schedule, self).save(*args, **kwargs)
        
    def __str__(self):
        return self.title         