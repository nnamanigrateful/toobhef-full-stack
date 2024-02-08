from django.shortcuts import render, HttpResponse
# from django.contrib import messages
# from .models import Event, Testimonial, FAQ, ContactUs, NewsletterSignup, VolunteerSignup  # Import necessary models

# def home(request):
#     # Handle Contact Us form submission
#     if request.method == "POST" and 'contact_submit' in request.POST:
#         contactus = ContactUs()
#         name = request.POST.get('name')
#         email = request.POST.get('email')
#         message = request.POST.get('message')
#         contactus.name = name
#         contactus.email = email
#         contactus.message = message
#         contactus.save()
#         return HttpResponse("<h1>Thanks for Contacting TOOBHEF</h1>")

#     # Handle Newsletter Signup form submission
#     if request.method == "POST" and 'newsletter_submit' in request.POST:
#         newsletter_signup = NewsletterSignup()
#         email = request.POST.get('email')
#         newsletter_signup.email = email
#         newsletter_signup.save()
#         return HttpResponse("<h1>Thank you for subscribing!</h1>")

#     events = Event.objects.all()
#     testimonials = Testimonial.objects.all()
#     faqs = FAQ.objects.all()

#     context = {
#         'events': events,
#         'testimonials': testimonials,
#         'faqs': faqs,
#     }

#     return render(request, 'index.html', context)


# def donate(request):
#     if request.method == "POST" and 'volunteer_submit' in request.POST:
#         volunteer = VolunteerSignup()
#         name = request.POST.get('name')
#         email = request.POST.get('email')
#         phone = request.POST.get('phone')
#         interest = request.POST.get('interest')
#         experience = request.POST.get('experience and reference')
#         volunteer.full_name = name
#         volunteer.email = email
#         volunteer.phone = phone
#         volunteer.interests = interest
#         volunteer.experience = experience
#         volunteer.save()
#         return HttpResponse("<h1>Thanks for Volunteering TOOBHEF</h1>")

#     return render(request, 'donate.html')

# def about_founder(request):
#     return render(request, 'about founder.html',{})


from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Event, Testimonial, FAQ, ContactUs, NewsletterSignup, VolunteerSignup

def home(request):
    if request.method == "POST":
        if 'contact_submit' in request.POST:
            # ... existing code for saving ContactUs form ...
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('home')

        elif 'newsletter_submit' in request.POST:
            # ... existing code for saving NewsletterSignup form ...
            messages.success(request, 'Thank you for subscribing to our newsletter!')
            return redirect('home')

    events = Event.objects.all()
    testimonials = Testimonial.objects.all()
    faqs = FAQ.objects.all()
    context = {'events': events, 'testimonials': testimonials, 'faqs': faqs}
    return render(request, 'index.html', context)

def donate(request):
    if request.method == "POST" and 'volunteer_submit' in request.POST:
        volunteer = VolunteerSignup()
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        interest = request.POST.get('interest')
        experience = request.POST.get('experience and reference')
        volunteer.full_name = name
        volunteer.email = email
        volunteer.phone = phone
        volunteer.interests = interest
        volunteer.experience = experience
        volunteer.save()
        return HttpResponse("<h1>Thanks for Volunteering TOOBHEF</h1>")

    return render(request, 'donate.html')


def about_founder(request):
   return render(request, 'about founder.html',{})


# Add any additional views you may have below

# For example, a view for 'about_founder.html'
# def about_founder(request):
#     return render(request, 'about_founder.html', {})
