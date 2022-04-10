# Generated by Django 3.0.8 on 2022-04-08 11:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about', models.TextField()),
                ('image', models.ImageField(upload_to='photos/%Y/%m/%d')),
                ('dateofbirth', models.DateField()),
                ('category', models.CharField(choices=[('Level four', 'Levelfour'), ('level five', 'Levelfive'), ('Level six', 'Levelsix')], default='Level four', max_length=50)),
                ('section', models.CharField(choices=[('Group 1', 'Groupone'), ('Group 2', 'Grouptwo'), ('Group 3', 'Groupthree'), ('Group 4', 'Groupfour'), ('Group 5', 'Groupfive'), ('Group 6', 'Groupsix'), ('Group 7', 'Groupseven'), ('Group 8', 'Groupeight'), ('Group 9', 'Groupnine'), ('Group 10', 'Groupten')], default='Group 1', max_length=50)),
                ('course', models.CharField(choices=[(' BSC(hons) in Computer science', 'Computerscience'), (' BSC(hons) in International business Management', 'Internationalbusiness'), (' BSC(hons) in Networking', 'Networking'), ('BSC(hons) in Multimedia', 'Multimedia')], default=' BSC(hons) in Computer science', max_length=50)),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]