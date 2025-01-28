from ninja import Router
from typing import List
from django.shortcuts import get_object_or_404
from .schemas import UserListSchema, UserDetailSchema
from .models import User

from ninja_jwt.authentication import JWTAuth

router = Router()

@router.get("", response=List[UserListSchema], auth=JWTAuth())
def list_users(request):
    qs =  User.objects.all()
    return qs

@router.get("{user_id}/", response=UserDetailSchema,  auth=JWTAuth())
def get_user(request, user_id:int):
    obj = get_object_or_404(User, id=user_id) 
    return obj