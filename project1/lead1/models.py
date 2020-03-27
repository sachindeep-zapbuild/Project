from django.db import models

# Create your models here.


class Comment(models.Model):
    cmnt = models.TextField(blank=True)


class LeaDetails(models.Model):
    title = models.CharField(max_length=100, blank=False)
    source = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=True)
    url = models.URLField(max_length=100, blank=False)
    domain = models.CharField(max_length=100, blank=False)
    keyword = models.CharField(max_length=100, blank=False)
    attachment = models.CharField(max_length=100, blank=False)
    technology = models.CharField(max_length=100, blank=False)
    estimated_budget = models.PositiveIntegerField()
    referredby = models.CharField(max_length=100, blank=False)
    assignto = models.CharField(max_length=100, blank=False)
    status = models.CharField(max_length=100, default='new')

    rejectreason = models.TextField(blank=True)

    fullname = models.CharField(max_length=100, blank=False)
    email = models.EmailField(max_length=100, blank=False, unique=True)
    company = models.CharField(max_length=100)
    designation = models.CharField(max_length=100, blank=False)
    skypeid = models.CharField(max_length=100, blank=False, unique=True)
    address = models.CharField(max_length=100, blank=False)
    city = models.CharField(max_length=100, blank=False)
    state = models.CharField(max_length=100, blank=False)
    country = models.CharField(max_length=100, blank=False)
    phone = models.CharField(max_length=100, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
