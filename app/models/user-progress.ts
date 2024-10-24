import { Observable } from '@nativescript/core';

export class UserProgress extends Observable {
    private _level: string = 'beginner';
    private _points: number = 0;
    private _completedLessons: string[] = [];

    get level(): string {
        return this._level;
    }

    set level(value: string) {
        if (this._level !== value) {
            this._level = value;
            this.notifyPropertyChange('level', value);
        }
    }

    addCompletedLesson(lessonId: string) {
        if (!this._completedLessons.includes(lessonId)) {
            this._completedLessons.push(lessonId);
            this._points += 10;
            this.notifyPropertyChange('points', this._points);
        }
    }
}