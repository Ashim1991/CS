# Generated by Django 3.0.8 on 2022-03-13 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='category',
            field=models.CharField(choices=[('world', 'World'), ('economy', 'Economy'), ('technology', 'Technology'), ('culture', 'Culture'), ('business', 'Business'), ('politics', 'Politics'), ('science', 'Science'), ('health', 'Health'), ('travel', 'Travel')], default='world', max_length=50),
        ),
    ]
