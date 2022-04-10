from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import  Service,UserAccount,Post,Question,Schedule

from Chat.models import Profile

class ServiceAdmin(SummernoteModelAdmin):
    exclude = ('slug', )
    list_display = ('id', 'title', 'date_created')
    list_display_links = ('id', 'title')
    search_fields = ('title', )
    list_per_page = 25
    summernote_fields = ('content', )

admin.site.register(Service,ServiceAdmin)
admin.site.register(UserAccount)
admin.site.register(Post)
admin.site.register(Question)
admin.site.register(Schedule)
admin.site.register(Profile)