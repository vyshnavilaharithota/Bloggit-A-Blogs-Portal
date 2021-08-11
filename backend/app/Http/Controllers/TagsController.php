<?php

namespace App\Http\Controllers;
use App\Tags;
use Facade\Ignition\Tabs\Tab;
use Illuminate\Http\Request;

class TagsController extends Controller
{
    public function index()
    {
        return Tags::all();
    }

    public function show(Tags $tags)
    {
        return $tags;
    }

    public function store(Request $request)
    {
        $file=$request->file('photo');
        $uploadPath="public/images";
        $originalFileName=$file->getClientOriginalName();
                            
        $file->move($uploadPath,$originalFileName);
        $request->merge(['photo' => $originalFileName]);
        $requestData = $request->all();
        $requestData['photo'] = $originalFileName;
        $tags = Tags::create($requestData);

        return response()->json($tags, 201);
    }
    
    public function update(Request $request, $id)
    {
        $tags = Tags::findOrFail($id);
        $tags->update($request->all());
        
        return $tags;
    }

    public function delete(Request $request, $id)
    {
        $tags = Tags::findOrFail($id);
        $tags->delete();

        return 204;
    }
    public function getAllTags()
    {
        return Tags::orderBy('id', 'DESC')->get();
    }
}
