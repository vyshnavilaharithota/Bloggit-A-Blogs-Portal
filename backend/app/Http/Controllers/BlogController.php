<?php

namespace App\Http\Controllers;
use App\Blog;

use App\User;
use Illuminate\Http\Request;

class BlogController extends Controller
{

    

    public function index()
    {
        return Blog::orderBy('id', 'DESC')->get();
    }

   
    public function getName($id)
    {
        if (User::where('id', $id)->exists()){
            $user=User::where('id', $id)->get();
            return response()->json($user,201);
        }
    }


    public function store(Request $request)
    {
        $file=$request->file('photo');
        $uploadPath="public/images";
        $originalFileName=$request['user_id'].$file->getClientOriginalName();

        $file->move($uploadPath,$originalFileName);
        $request->merge(['photo' => $originalFileName]);
        $requestData = $request->all();
        $requestData['photo'] = $originalFileName;

        return Blog::create($requestData);

    }

    public function getBlogs($id) {

            if (Blog::where('user_id', $id)->exists()) {
            $blogs = Blog::where('user_id', $id)->orderBy('id', 'DESC')->get();
            return response()->json(
                $blogs
            ,200);

          } else {
            return response()->json([
              "message" => "Blogs not found"
            ], 404);
          }
      }
    public function getBlogsByTag($name) {

        if (Blog::where('tag', $name)->exists()) {
            $blogs = Blog::where('tag', $name)->orderBy('id', 'DESC')->get();
            return response()->json(
                $blogs
                ,200);

        } else {
            return response()->json([
                "message" => "Blogs not found"
            ], 404);
        }
    }



     public function update(Request $request, $id)
     {
         $blog = Blog::findOrFail($id);
         $blog->update($request->all());

         return $blog;
     }
    public function delete(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);
        $blog->delete();

        return 204;
    }
    public function deleteUser(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return 204;
    }
    public function updateTag(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }
    public function updateProfile(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return $user;
    }

    public function getTags($id)
    {
        if (User::where('id', $id)->exists()) {
            $user = User::where('id', $id)->get('tag');
            return response()->json(
                $user
                ,200);

        } else {
            return response()->json([
                "message" => "Tags not found"
            ], 404);
        }
    }

    public function getUsers()
    {
        return User::orderBy('id', 'DESC')->get();
    }


}
