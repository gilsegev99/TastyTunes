from ninja import Schema
from datetime import datetime,date
from pydantic import EmailStr

class UserCreateSchema(Schema):
    # Create -> Data
    # UserIn
    email: EmailStr

class UserListSchema(Schema):
    # Create -> Data
    # UserIn
    email: EmailStr
    dateOfBirth: date
    totalPosts: int

class UserDetailSchema(Schema):
    # Get -> Data
    # UserOut
    id: int
    email: EmailStr
    dateOfBirth: date
    totalPosts: int
